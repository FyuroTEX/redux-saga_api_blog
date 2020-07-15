import React from 'react';
import Post from './Post';

const Posts = ({ posts }) => {
    if (!posts.length) {
        return <p>Has no posts</p>;
    };
    return posts.map(post => <Post post={post} key={post} />);
};

export default Posts;