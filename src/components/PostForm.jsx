import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert, clearPosts } from './../redux/actions/actions';
import { Alert } from './Alert';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    };
    submitHandler = (event) => {
        event.preventDefault();

        const { title } = this.state;
        
        if (!title.trim()) {
            return this.props.showAlert(`Title post can't be empty`);
        };
        const newPost = {
            title, id: Date.now().toString()
        };

        this.props.createPost(newPost);
        this.setState({ title: '' });
    };
    changeInputHandler = (event) => {
        event.persist();

        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }));
    };
    render() {
        const { clearPosts, alertMsg } = this.props;
        return (
            <form onSubmit={this.submitHandler} className='mb-3 row'>
                {alertMsg && <Alert alertMsg={alertMsg} />}
                <div className="col-10">
                    <label htmlFor="title" className="form-label">Create new post title</label>
                    <input
                        type="text"
                        placeholder="Post Title"
                        className="form-control"
                        id="title"
                        name='title'
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                    />
                </div>

                <div className="col-2 d-flex align-items-end justify-content-around">
                    <button className="btn btn-success" type='submit'>Create</button>
                    <button className="btn btn-danger" onClick={clearPosts} type='button'>Clear&nbsp;data</button>
                </div>

            </form>
        );
    };
};

const mapDispatchToProps = {
    createPost,
    showAlert,
    clearPosts
};
const mapStateToProps = (state) => ({
    alertMsg: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);