import React, { Component } from 'react';

export default class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    submitHandler = event => {
        event.preventDefault();
    };
    render() {
        return (
            <form onSubmit={this.submitHandler} className='mb-3 row'>
                <div className="col-8">
                    <label htmlFor="title" className="form-label">Post Title</label>
                    <input type="text" placeholder="Post Title" className="form-control" id="title" />
                </div>

                <div className="col-2 d-flex align-items-end">
                    <button className="btn btn-success">Create</button>
                </div>




            </form>
        );
    };
};