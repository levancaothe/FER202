import React from 'react';
import fptLogo from '../assets/logo.jpg';

function ProfileCard() {
  return (
    <div className="card shadow-sm mx-auto my-4 border rounded" style={{ maxWidth: '750px', padding: '16px 24px' }}>
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <img src={fptLogo} alt="FPT University" style={{ maxHeight: '110px', maxWidth: '100%', objectFit: 'contain' }} />
        </div>
        <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
          <h4 className="fw-bold mb-2 text-dark">Hoai Nguyen - FPT DaNang</h4>
          <p className="mb-0 text-secondary fs-6">Moblie: 0982827763</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
