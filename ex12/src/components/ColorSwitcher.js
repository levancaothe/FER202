import React, { useState } from 'react';

const colorOptions = [
  { name: 'Red', value: '#dc3545', textColor: '#ffffff' },
  { name: 'Blue', value: '#0d6efd', textColor: '#ffffff' },
  { name: 'Green', value: '#198754', textColor: '#ffffff' },
  { name: 'Yellow', value: '#ffc107', textColor: '#000000' },
  { name: 'Purple', value: '#6f42c1', textColor: '#ffffff' },
  { name: 'Teal', value: '#20c997', textColor: '#ffffff' },
  { name: 'Dark Gray', value: '#343a40', textColor: '#ffffff' }
];

const ColorSwitcher = () => {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].value);

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const currentColorObj = colorOptions.find(c => c.value === selectedColor) || colorOptions[0];

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="card-title text-primary mb-3">5. Color Switcher</h3>
      <div className="mb-3">
        <label htmlFor="colorSelect" className="form-label fw-bold">
          Select a Background Color:
        </label>
        <select
          id="colorSelect"
          className="form-select"
          value={selectedColor}
          onChange={handleChange}
        >
          {colorOptions.map(color => (
            <option key={color.value} value={color.value}>
              {color.name}
            </option>
          ))}
        </select>
      </div>

      <div
        className="p-5 rounded text-center shadow-sm"
        style={{
          backgroundColor: selectedColor,
          color: currentColorObj.textColor,
          minHeight: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.4s ease, color 0.4s ease'
        }}
      >
        <h4 className="mb-0 fw-bold">
          Selected Color: {currentColorObj.name} ({selectedColor})
        </h4>
      </div>
    </div>
  );
};

export default ColorSwitcher;
