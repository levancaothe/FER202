import React, { useState, useEffect } from 'react';

const UserPosts = ({ userId = 1 }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="card-title text-primary mb-3">1. Data Fetching (UserPosts)</h3>
      <p className="text-muted">
        Fetching posts for <strong>User ID: {userId}</strong> from JSONPlaceholder API
      </p>

      {loading && (
        <div className="d-flex align-items-center gap-2 text-primary my-3">
          <div className="spinner-border spinner-border-sm" role="status"></div>
          <span>Loading posts for User {userId}...</span>
        </div>
      )}

      {error && (
        <div className="alert alert-danger">Error: {error}</div>
      )}

      {!loading && !error && (
        <div>
          <p className="fw-bold text-secondary mb-3">Total posts found: {posts.length}</p>
          <div className="row g-3" style={{ maxHeight: '350px', overflowY: 'auto' }}>
            {posts.map((post) => (
              <div key={post.id} className="col-12">
                <div className="border rounded p-3 bg-white shadow-sm">
                  <h5 className="text-dark mb-2 text-capitalize">{post.title}</h5>
                  <p className="text-secondary mb-0 small">{post.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPosts;
