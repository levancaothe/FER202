import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialValue = 10 }) => {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (timeRemaining <= 0 || !isRunning) {
      return;
    }

    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timeRemaining, isRunning]);

  const handleReset = () => {
    setTimeRemaining(initialValue);
    setIsRunning(true);
  };

  const handlePauseResume = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="card-title text-primary mb-3">2. Countdown Timer</h3>
      <div className="alert alert-info text-center py-3 mb-3">
        <h4 className="mb-0 fw-bold">
          Time Remaining: <span className={timeRemaining === 0 ? 'text-danger' : 'text-primary'}>{timeRemaining}</span>s
        </h4>
        {timeRemaining === 0 && (
          <div className="mt-2 text-danger fw-semibold">⏰ Timer Finished!</div>
        )}
      </div>

      <div className="d-flex gap-2 justify-content-center">
        <button
          className={`btn ${isRunning ? 'btn-warning' : 'btn-success'}`}
          onClick={handlePauseResume}
          disabled={timeRemaining <= 0}
        >
          {isRunning ? 'Pause' : 'Resume'}
        </button>
        <button className="btn btn-secondary" onClick={handleReset}>
          Reset ({initialValue}s)
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
