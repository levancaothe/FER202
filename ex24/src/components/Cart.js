import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartQuantity, deleteFromCart } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cartState.cart);
  const dispatch = useDispatch();

  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ marginTop: '40px' }}>
      <h2 style={{ borderBottom: '2px solid #dc3545', paddingBottom: '10px' }}>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p style={{ color: '#6c757d', fontStyle: 'italic' }}>Your cart is empty.</p>
      ) : (
        <div>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6', textAlign: 'left' }}>
                <th style={{ padding: '10px' }}>ID</th>
                <th style={{ padding: '10px' }}>Product</th>
                <th style={{ padding: '10px' }}>Price</th>
                <th style={{ padding: '10px' }}>Catalogs</th>
                <th style={{ padding: '10px' }}>Quantity</th>
                <th style={{ padding: '10px' }}>Subtotal</th>
                <th style={{ padding: '10px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={{ padding: '10px', fontSize: '14px', color: '#6c757d' }}>{item.id}</td>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>{item.name}</td>
                  <td style={{ padding: '10px' }}>${item.price}</td>
                  <td style={{ padding: '10px' }}>
                    {item.catalogs.join(', ')}
                  </td>
                  <td style={{ padding: '10px' }}>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value, 10);
                        if (!isNaN(val) && val > 0) {
                          dispatch(updateCartQuantity({ id: item.id, quantity: val }));
                        }
                      }}
                      style={{ width: '60px', padding: '4px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                  </td>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td style={{ padding: '10px' }}>
                    <button
                      onClick={() => dispatch(deleteFromCart(item.id))}
                      style={{
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}
                    >
                      Delete from Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: '20px', textAlign: 'right', fontSize: '20px', fontWeight: 'bold', color: '#198754' }}>
            Total Cost: ${totalCost.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
