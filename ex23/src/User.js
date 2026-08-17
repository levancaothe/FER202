import React from 'react';

const User = ({ user }) => {
  return (
    <div style={{ border: '1px solid #cce5ff', borderRadius: '8px', padding: '15px', marginBottom: '12px', backgroundColor: '#f8f9fa' }}>
      <h3 style={{ margin: '0 0 5px 0', color: '#0d6efd' }}>{user.name}</h3>
      <p style={{ margin: '0 0 5px 0', color: '#495057' }}>📧 {user.email}</p>
      <p style={{ margin: 0, color: '#6c757d', fontSize: '14px' }}>🏢 {user.company?.name || 'N/A'}</p>
    </div>
  );
};

export default User;
