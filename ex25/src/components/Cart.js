import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartQuantity, deleteFromCart } from '../redux/productSlice';
import { Table, Button, Input, Badge, Card, CardBody } from 'reactstrap';

const Cart = () => {
  const cart = useSelector((state) => state.shop.cart);
  const dispatch = useDispatch();

  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="my-4">
      <h2 className="mb-4 text-danger border-bottom pb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="alert alert-warning text-center">Your shopping cart is currently empty.</div>
      ) : (
        <Card className="shadow-sm">
          <CardBody>
            <Table responsive hover align="middle">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Catalogs</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td><small className="text-muted">{item.id}</small></td>
                    <td>
                      <strong>{item.name}</strong>
                      <small className="d-block text-muted">{item.description}</small>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      {item.catalogs.map((cat, idx) => (
                        <Badge color="info" className="me-1" key={idx}>{cat}</Badge>
                      ))}
                    </td>
                    <td style={{ width: '100px' }}>
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => {
                          const val = parseInt(e.target.value, 10);
                          if (!isNaN(val) && val > 0) {
                            dispatch(updateCartQuantity({ id: item.id, quantity: val }));
                          }
                        }}
                      />
                    </td>
                    <td className="fw-bold text-success">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="text-center">
                      <Button
                        color="danger"
                        size="sm"
                        onClick={() => dispatch(deleteFromCart(item.id))}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="d-flex justify-content-end align-items-center mt-3">
              <h3 className="text-success me-2">Total Cost:</h3>
              <h3 className="text-success fw-bold">${totalCost.toFixed(2)}</h3>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default Cart;
