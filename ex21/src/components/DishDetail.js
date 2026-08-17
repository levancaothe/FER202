import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { dishes } from '../data';

const DishDetail = () => {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === parseInt(id, 10));

  if (!dish) {
    return (
      <div>
        <h3>Dish not found!</h3>
        <Link to="/dishes">Back to Dishes List</Link>
      </div>
    );
  }

  return (
    <div style={{ border: '1px solid #ffc107', borderRadius: '8px', padding: '20px', backgroundColor: '#fffdf5' }}>
      <h2>{dish.name} {dish.label && <span style={{ backgroundColor: '#dc3545', color: '#fff', fontSize: '14px', padding: '2px 8px', borderRadius: '4px' }}>{dish.label}</span>}</h2>
      <p><strong>Category:</strong> {dish.category}</p>
      <p><strong>Price:</strong> ${dish.price}</p>
      <p><strong>Description:</strong> {dish.description}</p>
      <p><strong>Featured:</strong> {dish.featured ? 'Yes' : 'No'}</p>
      <Link to="/dishes" style={{ color: '#d9534f', textDecoration: 'none', fontWeight: 'bold' }}>
        &larr; Back to Dishes List
      </Link>
    </div>
  );
};

export default DishDetail;
