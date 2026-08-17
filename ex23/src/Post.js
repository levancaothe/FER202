import React from 'react';

const Post = ({ post }) => {
  return (
    <div style={{ border: '1px solid #d4edda', borderRadius: '8px', padding: '15px', marginBottom: '12px', backgroundColor: '#ffffff' }}>
      <h3 style={{ margin: '0 0 5px 0', color: '#198754', textTransform: 'capitalize' }}>{post.title}</h3>
      <p style={{ margin: 0, color: '#333', fontSize: '14px' }}>{post.body}</p>
    </div>
  );
};

export default Post;
