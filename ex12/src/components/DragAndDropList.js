import React, { useState } from 'react';

const initialList = [
  'React JS',
  'JavaScript (ES6+)',
  'HTML5 & CSS3',
  'Node JS',
  'Python Data Science'
];

const DragAndDropList = () => {
  const [items, setItems] = useState(initialList);
  const [draggingItem, setDraggingItem] = useState(null);

  // Triggered when user starts dragging an item
  const handleDragStart = (e, index) => {
    setDraggingItem(index);
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', index.toString());
    }
  };

  // Triggered when dragged item is over another drop target
  const handleDragOver = (e, index) => {
    e.preventDefault(); // Required to allow drop
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }
  };

  // Triggered when user drops the dragged item
  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    if (draggingItem === null || draggingItem === targetIndex) return;

    const updatedItems = [...items];
    const [draggedItemContent] = updatedItems.splice(draggingItem, 1);
    updatedItems.splice(targetIndex, 0, draggedItemContent);

    setItems(updatedItems);
    setDraggingItem(null);
  };

  // Triggered when the user finishes dragging
  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="card-title text-primary mb-3">7. Drag and Drop List</h3>
      <p className="text-muted">
        Drag an item and drop it onto another position to reorder the list.
      </p>

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
            className={`list-group-item d-flex justify-content-between align-items-center user-select-none ${
              draggingItem === index ? 'bg-light text-muted border-secondary' : ''
            }`}
            style={{
              cursor: 'grab',
              opacity: draggingItem === index ? 0.5 : 1,
              transition: 'all 0.2s ease'
            }}
          >
            <span>
              <span className="me-2 text-secondary fw-bold">☰</span>
              {item}
            </span>
            <span className="badge bg-secondary rounded-pill">Position {index + 1}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragAndDropList;
