import React from 'react';
import { useCart } from '../context/CartContext';

const DishesList = () => {
  const { dishes, addToCart } = useCart();

  return (
    <div className="mb-4">
      <h3 className="text-primary mb-3">Dishes Menu</h3>
      <div className="row g-4">
        {dishes.map((dish) => (
          <div key={dish.id} className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="card-img-top"
                style={{ height: '160px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h5 className="card-title fw-bold mb-0">{dish.name}</h5>
                  {dish.label && (
                    <span className="badge bg-danger ms-1">{dish.label}</span>
                  )}
                </div>

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge bg-secondary text-uppercase">{dish.category}</span>
                  <span className="fw-bold text-success fs-5">${dish.price}</span>
                </div>

                <p className="card-text small text-muted flex-grow-1">
                  {dish.description}
                </p>

                <button
                  className="btn btn-primary w-100 mt-2 fw-semibold"
                  onClick={() => addToCart(dish)}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishesList;
