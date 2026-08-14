import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const {
    cartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    cartCount,
    totalValue
  } = useCart();

  return (
    <div className="card shadow-sm p-4 mb-4 bg-white">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="text-primary mb-0">🛒 Your Shopping Cart</h3>
        {cartItems.length > 0 && (
          <button className="btn btn-outline-danger btn-sm" onClick={clearCart}>
            Clear Cart
          </button>
        )}
      </div>

      {/* Real-time Summary Header */}
      <div className="alert alert-info d-flex justify-content-between align-items-center mb-3">
        <div>
          <strong>Total Items: </strong>
          <span className="badge bg-primary fs-6 ms-1">{cartCount}</span>
        </div>
        <div>
          <strong>Total Value: </strong>
          <span className="badge bg-success fs-6 ms-1">
            ${totalValue.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Cart Items List */}
      {cartItems.length === 0 ? (
        <div className="text-center py-4 text-muted">
          <p className="mb-0">Your cart is currently empty. Click "Add to Cart" on any dish above!</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Dish</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                const subtotal = (parseFloat(item.price) * item.quantity).toFixed(2);
                return (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '45px', height: '45px', objectFit: 'cover', borderRadius: '6px' }}
                        />
                        <span className="fw-semibold">{item.name}</span>
                      </div>
                    </td>
                    <td>${parseFloat(item.price).toFixed(2)}</td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-outline-secondary btn-sm px-2"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <span className="fw-bold px-2">{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm px-2"
                          onClick={() => addToCart(item)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="fw-bold text-success">${subtotal}</td>
                    <td className="text-end">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
