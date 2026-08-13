import React from "react";

function GridBox({ children }) {
  return <div className="grid-box">{children}</div>;
}

function Exercise3() {
  return (
    <div className="exercise-page">

      <header className="gray-header">
        <h1>Let's test the grid!</h1>
      </header>

      <main className="container py-4">

        <ul className="nav exercise-nav mb-5">

          <li className="nav-item">
            <a
              className="nav-link active"
              href="#active"
            >
              Active
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="#link1"
            >
              Link
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="#link2"
            >
              Link
            </a>
          </li>

          <li className="nav-item">
            <span className="nav-link disabled">
              Disabled
            </span>
          </li>

        </ul>

        <div className="row g-0">

          <div className="col-6">
            <GridBox>First col</GridBox>
          </div>

          <div className="col-6">
            <GridBox>Second col</GridBox>
          </div>

        </div>

        <div className="row g-0">

          <div className="col-4">
            <GridBox>col</GridBox>
          </div>

          <div className="col-4">
            <GridBox>col</GridBox>
          </div>

          <div className="col-4">
            <GridBox>col</GridBox>
          </div>

        </div>

        <div className="row g-0">

          <div className="col-3">
            <GridBox>col</GridBox>
          </div>

          <div className="col-3">
            <GridBox>col</GridBox>
          </div>

          <div className="col-3">
            <GridBox>col</GridBox>
          </div>

          <div className="col-3">
            <GridBox>col</GridBox>
          </div>

        </div>

      </main>

      <footer className="exercise-footer">
        Created by ABC!
      </footer>

    </div>
  );
}

export default Exercise3;