import React, { useState, useEffect } from 'react';

const ValidatedInput = ({
  validationFunction = (val) => val.trim().length >= 6,
  errorMessage = 'Input must be at least 6 characters long.'
}) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="card-title text-primary mb-3">4. Form Input Validation</h3>
      <div className="mb-3">
        <label htmlFor="validatedInput" className="form-label fw-bold">
          Type here (minimum 6 characters required):
        </label>
        <input
          id="validatedInput"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`form-control ${!isValid ? 'is-invalid error border-danger' : 'is-valid'}`}
          placeholder="Type something..."
        />
        {!isValid && (
          <p className="error-message invalid-feedback d-block mt-2 text-danger fw-semibold">
            {errorMessage}
          </p>
        )}
        {isValid && value.length > 0 && (
          <p className="valid-feedback d-block mt-2 text-success fw-semibold">
            ✓ Input is valid!
          </p>
        )}
      </div>
    </div>
  );
};

export default ValidatedInput;
