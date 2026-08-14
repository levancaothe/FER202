import React, { useState, useEffect } from 'react';

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="card-title text-primary mb-3">3. Window Resize Listener</h3>
      <p className="text-muted">
        Resize your browser window to see the viewport dimensions update in real time.
      </p>

      <div className="p-4 bg-light rounded text-center border">
        <h5 className="mb-2 text-secondary">Current Viewport Size</h5>
        <p className="display-6 fw-bold text-dark mb-0">
          Window size: {windowSize.width} x {windowSize.height}
        </p>
      </div>
    </div>
  );
};

export default WindowSize;
