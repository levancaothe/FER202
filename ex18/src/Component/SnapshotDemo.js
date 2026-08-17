import React, { useState } from 'react';

const SnapshotDemo = () => {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleSnapshot = () => {
    setSnapshot(count);
  };

  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>State as a Snapshot Demo</h1>
      <p style={{ fontSize: '20px' }}>Count: {count}</p>
      {snapshot !== null && (
        <p style={{ fontSize: '16px', color: '#6c757d' }}>Saved Snapshot: {snapshot}</p>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <button 
          onClick={handleIncrement}
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
          Increment
        </button>
        <button 
          onClick={handleSnapshot}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#17a2b8',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Take Snapshot
        </button>
        <button 
          onClick={handleRestore}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#ffc107',
            color: '#212529',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Restore Snapshot
        </button>
      </div>
    </div>
  );
};

export default SnapshotDemo;
