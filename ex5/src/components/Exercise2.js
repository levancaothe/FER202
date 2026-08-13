import React from "react";
import htmlLogo from "../assets/html5.png";
import cssLogo from "../assets/css3.png";
import bootstrapLogo from "../assets/bootstrap.png";

function Exercise2() {
  return (
    <div className="exercise-page">

      <header className="gray-header centered-header">
        <h1>My First Bootstrap Page</h1>
      </header>

      <main className="container py-5">

        <div className="row align-items-center justify-content-center text-center g-5">

          <div className="col-md-4">
            <img
              src={htmlLogo}
              className="tech-logo"
              alt="HTML5"
            />
          </div>

          <div className="col-md-4">
            <img
              src={cssLogo}
              className="tech-logo"
              alt="CSS3"
            />
          </div>

          <div className="col-md-4">
            <img
              src={bootstrapLogo}
              className="tech-logo"
              alt="Bootstrap"
            />
          </div>

        </div>

      </main>

    </div>
  );
}

export default Exercise2;