import React from 'react';
import { Link } from 'react-router-dom';
import { dishes } from '../data';

const DishList = () => {
  return (
    <div>
      <h2>Dishes List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {dishes.map((dish) => (
          <li 
            key={dish.id} 
            style={{ 
              padding: '12px 15px', 
              border: '1px solid #ddd', 
              borderRadius: '5px', 
              marginBottom: '10px',
              backgroundColor: '#fff8f0' 
            }}
          >
            <Link to={`/dishes/${dish.id}`} style={{ textDecoration: 'none', color: '#d9534f', fontWeight: 'bold' }}>
              Dish #{dish.id}: {dish.name} {dish.label && `(${dish.label})`} - ${dish.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DishList;
