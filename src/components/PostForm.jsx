import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from './../redux/actions/actions';

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
            return;
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
        return (
            <form onSubmit={this.submitHandler} className='mb-3 row'>
                <div className="col-8">
                    <label htmlFor="title" className="form-label">Post Title</label>
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

                <div className="col-2 d-flex align-items-end">
                    <button className="btn btn-success" type='submit'>Create</button>
                </div>




            </form>
        );
    };
};

const mapDispatchToProps = {
    createPost
};

export default connect(null, mapDispatchToProps)(PostForm);