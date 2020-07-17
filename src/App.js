import React, { useEffect } from 'react';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPost from './components/FetchedPosts';
import WOW from 'wowjs';

function App() {
    useEffect(() => {
        const wow = new WOW.WOW({
            live: false,
            mobile: true
        });
        wow.init();
    });
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
