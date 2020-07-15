import React from 'react';
import Post from './Post';

const FetchedPost = ({ posts }) => {
    if (!posts.length) {
        return (
            <>
                <p>Has no posts</p>
                <button className='btn btn-primary'>Load Posts</button>
            </>
        );

    };
    return posts.map(post => <Post post={post} key={post} />);
};
export default FetchedPost;