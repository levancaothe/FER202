import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="card-title text-primary mb-3">1. Simple Counter</h3>
      <p className="card-text fs-5">
        Current number state: <strong className="badge bg-primary fs-5 ms-2">{count}</strong>
      </p>
      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-success" onClick={handleIncrement}>
          Increment (+1)
        </button>
        <button className="btn btn-warning" onClick={handleDecrement}>
          Decrement (-1)
        </button>
        <button className="btn btn-secondary" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
