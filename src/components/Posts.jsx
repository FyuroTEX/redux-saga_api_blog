import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';

const Posts = ({ posts }) => {
    if (posts === undefined || !posts.length) {
        return <p>Has no posts</p>;
    };
    return posts.map(post => <Post post={post} key={post.id} />);
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
};

export default connect(mapStateToProps)(Posts);