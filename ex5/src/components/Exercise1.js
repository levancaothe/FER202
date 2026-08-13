import React from "react";

function GridBox({ children }) {
  return <div className="grid-box">{children}</div>;
}

function Exercise1() {
  return (
    <div className="exercise-page">
      <header className="gray-header">
        <h1>Let's test the grid!</h1>
      </header>

      <main className="container py-5">
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

      <footer className="exercise-footer">Created by ABC!</footer>
    </div>
  );
}

export default Exercise1;
