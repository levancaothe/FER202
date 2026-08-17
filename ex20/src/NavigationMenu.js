import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#e9ecef', borderRadius: '8px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: '#0d6efd', fontWeight: 'bold' }}>Home</Link>
        </li>
        <li>
          <Link to="/products" style={{ textDecoration: 'none', color: '#0d6efd', fontWeight: 'bold' }}>Products</Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: 'none', color: '#0d6efd', fontWeight: 'bold' }}>About</Link>
        </li>
        <li>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#0d6efd', fontWeight: 'bold' }}>Contact</Link>
        </li>
        <li>
          <Link to="/users/123" style={{ textDecoration: 'none', color: '#0d6efd', fontWeight: 'bold' }}>User Profile (123)</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
