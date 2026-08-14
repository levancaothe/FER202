import React, { useReducer } from 'react';

// Define counterReducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="card-title text-primary mb-3">1. Simple Counter (useReducer)</h3>
      <p className="card-text fs-5">
        Current Count: <strong className="badge bg-primary fs-5 ms-2">{count}</strong>
      </p>
      <div className="d-flex gap-2 mt-3">
        <button
          className="btn btn-success px-4"
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          + Increment
        </button>
        <button
          className="btn btn-warning px-4"
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          - Decrement
        </button>
        <button
          className="btn btn-secondary px-4"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
