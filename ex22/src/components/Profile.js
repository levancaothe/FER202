import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  return (
    <div style={{ textAlign: 'center', marginTop: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Profile Component</h1>
      {id ? (
        <p style={{ fontSize: '18px', color: '#0d6efd' }}>
          User Profile ID (Optional Parameter): <strong>{id}</strong>
        </p>
      ) : (
        <p style={{ fontSize: '18px', color: '#6c757d' }}>
          Default User Profile (No optional parameter provided)
        </p>
      )}
    </div>
  );
};

export default Profile;
