import React, { useState } from 'react';

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="card-title text-primary mb-3">3. Toggle Visibility</h3>
      <div className="mb-3">
        <button
          className={`btn ${isVisible ? 'btn-danger' : 'btn-primary'}`}
          onClick={handleToggle}
        >
          {isVisible ? 'Hide Text' : 'Show Text'}
        </button>
      </div>
      {isVisible && (
        <div className="alert alert-success">
          <p className="mb-0">
            🎉 Hello! This piece of text is now visible. Click the button above to hide it.
          </p>
        </div>
      )}
    </div>
  );
};

export default ToggleVisibility;
