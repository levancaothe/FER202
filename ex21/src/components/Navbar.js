import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '15px', backgroundColor: '#343a40', color: 'white', borderRadius: '8px', marginBottom: '20px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
        <li>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        </li>
        <li>
          <Link to="/users" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Users List</Link>
        </li>
        <li>
          <Link to="/dishes" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Dishes List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
