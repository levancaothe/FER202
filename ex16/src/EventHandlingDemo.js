import React, { useState } from 'react';

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Event Handling Demo</h1>
      <p style={{ fontSize: '20px' }}>Count: {count}</p>
      <button 
        onClick={handleButtonClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Increase Count
      </button>
    </div>
  );
};

export default EventHandlingDemo;
