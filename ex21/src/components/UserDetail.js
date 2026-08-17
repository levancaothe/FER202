import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { users } from '../data';

const UserDetail = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id, 10));

  if (!user) {
    return (
      <div>
        <h3>User not found!</h3>
        <Link to="/users">Back to Users List</Link>
      </div>
    );
  }

  return (
    <div style={{ border: '1px solid #17a2b8', borderRadius: '8px', padding: '20px', backgroundColor: '#eef9fa' }}>
      <h2>User Details (ID: {user.id})</h2>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <Link to="/users" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
        &larr; Back to Users List
      </Link>
    </div>
  );
};

export default UserDetail;
