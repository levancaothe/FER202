import React from "react";
import fptUniversity from "../assets/logo.jpg";

function Exercise4() {
  return (
    <div className="fpt-page">

      <header className="fpt-header">

        <img
          src={fptUniversity}
          alt="FPT University"
          className="fpt-logo-image"
        />

        <nav className="fpt-nav">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>

      </header>

      <main className="fpt-content">

        <section id="about">

          <h2>About</h2>

          <p>
            This is the about section of the website.
          </p>

        </section>

        <section id="contact">

          <h2>Contact</h2>

          <p>
            For any inquiries, please contact us at
            example@example.com.
          </p>

        </section>

      </main>

      <footer className="fpt-footer">
        © 2023 Website. All rights reserved.
      </footer>

    </div>
  );
}

export default Exercise4;