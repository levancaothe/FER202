import React, { useState, useEffect } from 'react';
import { fetchUsers } from './api';
import User from './User';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div style={{ padding: '10px', color: '#0d6efd' }}>Loading Users Data...</div>;
  }

  return (
    <div>
      <h2 style={{ borderBottom: '2px solid #0d6efd', paddingBottom: '8px' }}>Users List</h2>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
