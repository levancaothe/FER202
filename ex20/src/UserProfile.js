import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>User Profile: {userId || 'No User Selected'}</h1>
    </div>
  );
};

export default UserProfile;
