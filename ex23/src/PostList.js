import React, { useState, useEffect } from 'react';
import { fetchPosts } from './api';
import Post from './Post';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div style={{ padding: '10px', color: '#198754' }}>Loading Posts Data...</div>;
  }

  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #198754', paddingBottom: '8px' }}>Posts List</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
