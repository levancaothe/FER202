import React, { useState } from 'react';

const initialItems = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Kiwi',
  'Lemon',
  'Mango',
  'Orange',
  'Papaya',
  'Strawberry',
  'Watermelon'
];

const SearchFilter = () => {
  const [query, setQuery] = useState('');

  const filteredItems = initialItems.filter(item =>
    item.toLowerCase().includes(query.toLowerCase().trim())
  );

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="card-title text-primary mb-3">6. Search Filter</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search items..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <p className="text-muted small">
        Showing {filteredItems.length} of {initialItems.length} items
      </p>

      {filteredItems.length === 0 ? (
        <div className="alert alert-warning mb-0">
          No items found matching "<strong>{query}</strong>"
        </div>
      ) : (
        <ul className="list-group">
          {filteredItems.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchFilter;
