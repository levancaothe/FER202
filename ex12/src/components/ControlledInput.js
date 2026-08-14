import React, { useState } from 'react';

const ControlledInput = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="card-title text-primary mb-3">2. Controlled Input Field</h3>
      <div className="mb-3">
        <label htmlFor="textInput" className="form-label fw-bold">
          Type something below:
        </label>
        <input
          id="textInput"
          type="text"
          className="form-control"
          placeholder="Type here..."
          value={text}
          onChange={handleChange}
        />
      </div>
      <div className="alert alert-info mb-0">
        <strong>Real-time Display: </strong>
        <span className="fst-italic">{text || '(Start typing to see live update)'}</span>
      </div>
    </div>
  );
};

export default ControlledInput;
