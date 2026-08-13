import React from 'react';
import fptUniversity from '../assets/logo.jpg';

function SimpleWebsite() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <header className="py-4 text-center" style={{ backgroundColor: '#ea7e24' }}>
        <div className="d-inline-block bg-white p-3 rounded mb-3 shadow-sm" style={{ maxWidth: '650px', width: '90%' }}>
          <img
            src={fptUniversity}
            alt="FPT University"
            className="img-fluid"
            style={{ maxHeight: '220px', objectFit: 'contain' }}
          />
        </div>

        <nav className="d-flex justify-content-center gap-4 fs-5">
          <a href="#home" className="text-white text-decoration-none fw-normal">
            Home
          </a>
          <a href="#about" className="text-white text-decoration-none fw-normal">
            About
          </a>
          <a href="#contact" className="text-white text-decoration-none fw-normal">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex-grow-1 text-center py-5 container">
        <section id="about" className="mb-5">
          <h2 className="fw-bold mb-3">About</h2>
          <p className="fs-5 text-secondary">This is the about section of the website.</p>
        </section>

        <section id="contact" className="mb-4">
          <h2 className="fw-bold mb-3">Contact</h2>
          <p className="fs-5 text-secondary">
            For any inquiries, please contact us at example@example.com.
          </p>
        </section>
      </main>

      <footer className="text-center py-4 text-white" style={{ backgroundColor: '#f5be7b', fontSize: '1.2rem' }}>
        © 2023 Website. All rights reserved.
      </footer>
    </div>
  );
}

export default SimpleWebsite;
