import React from 'react';
import { Link } from 'react-router-dom';
import { users } from '../data';

const UserList = () => {
  return (
    <div>
      <h2>Users List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user) => (
          <li 
            key={user.id} 
            style={{ 
              padding: '10px 15px', 
              border: '1px solid #ddd', 
              borderRadius: '5px', 
              marginBottom: '8px',
              backgroundColor: '#f8f9fa' 
            }}
          >
            <Link to={`/users/${user.id}`} style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
              User ID {user.id}: {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
