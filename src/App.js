import React from 'react';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPost from './components/FetchedPosts';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Локальные посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>API посты</h2>
          <FetchedPost />
        </div>
      </div>
    </div>
  );
}

export default App;
