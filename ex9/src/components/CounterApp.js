import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="card shadow-sm mx-auto my-4 text-center p-4" style={{ maxWidth: '400px' }}>
      <h3 className="card-title mb-3 text-secondary">Counter Application</h3>
      <div className="display-2 fw-bold text-dark mb-4">{count}</div>
      <div className="d-flex justify-content-center gap-3">
        <button
          className="btn btn-danger btn-lg px-4"
          onClick={() => setCount(count - 1)}
        >
          - Decrement
        </button>
        <button
          className="btn btn-secondary btn-lg px-3"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          className="btn btn-success btn-lg px-4"
          onClick={() => setCount(count + 1)}
        >
          + Increment
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
