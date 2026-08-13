import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import pizza1 from '../assets/pizza1.jpg';
import pizza2 from '../assets/pizza2.jpg';
import pizza3 from '../assets/pizza3.jpg';
import pizza4 from '../assets/pizza4.jpg';

const menuItems = [
  {
    id: 1,
    title: 'Margherita Pizza',
    originalPrice: '$20.00',
    salePrice: '$14.00',
    onSale: true,
    image: pizza1
  },
  {
    id: 2,
    title: 'Mushroom Pizza',
    originalPrice: '$22.00',
    salePrice: '$17.00',
    onSale: false,
    image: pizza2
  },
  {
    id: 3,
    title: 'Hawaiian Pizza',
    originalPrice: '$19.00',
    salePrice: '$16.00',
    onSale: true,
    image: pizza3
  },
  {
    id: 4,
    title: 'Pesto Pizza',
    originalPrice: '$23.00',
    salePrice: '$17.00',
    onSale: true,
    image: pizza4
  }
];

function PizzaMenu() {
  return (
    <Container className="my-5">
      <h2 className="text-center text-white display-5 fw-bold mb-4">Our Menu</h2>
      <Row className="g-4">
        {menuItems.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={3}>
            <Card className="bg-dark text-white border-0 h-100 position-relative shadow">
              {item.onSale && (
                <Badge
                  bg="warning"
                  text="dark"
                  className="position-absolute top-0 start-0 m-2 px-2 py-1 uppercase fw-bold"
                  style={{ zIndex: 10, fontSize: '0.75rem' }}
                >
                  SALE
                </Badge>
              )}
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column text-center p-3">
                <Card.Title className="fs-6 fw-bold mb-2">{item.title}</Card.Title>
                <div className="mb-3 fs-6">
                  <span className="text-secondary text-decoration-line-through me-2">
                    {item.originalPrice}
                  </span>
                  <span className="text-warning fw-bold">{item.salePrice}</span>
                </div>
                <Button variant="dark" className="w-100 border-secondary mt-auto">
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PizzaMenu;
