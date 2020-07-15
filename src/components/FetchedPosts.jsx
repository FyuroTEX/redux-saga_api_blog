import React from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/actions';

const FetchedPost = () => {

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.fetchedPosts);

    if (!posts.length) {
        return (
            <>
                <p>Has no posts</p>
                <button
                    className='btn btn-primary'
                    onClick={() => dispatch(fetchPosts())}
                >Load Posts</button>
            </>
        );

    };
    return posts.map(post => <Post post={post} key={post.id} />);
};
export default FetchedPost;