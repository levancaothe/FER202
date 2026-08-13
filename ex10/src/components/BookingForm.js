import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function BookingForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table Booking Submitted!\nName: ${name}\nDate: ${date}\nService: ${service}\nMessage: ${message}`);
  };

  return (
    <Container className="my-5 py-4" style={{ maxWidth: '850px' }}>
      <h2 className="text-center text-white display-5 fw-bold mb-4">Book Your Table</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="g-3 mb-3">
          <Col xs={12} md={4}>
            <Form.Group controlId="formName">
              <Form.Label className="text-light small mb-1">Your Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                className="bg-dark text-white border-secondary"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group controlId="formDate">
              <Form.Label className="text-light small mb-1">Date *</Form.Label>
              <Form.Control
                type="date"
                className="bg-dark text-white border-secondary"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group controlId="formService">
              <Form.Label className="text-light small mb-1">Select a Service *</Form.Label>
              <Form.Select
                className="bg-dark text-white border-secondary"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">Choose service...</option>
                <option value="Dine-in">Dine-in Table</option>
                <option value="Takeaway">Takeaway Order</option>
                <option value="Birthday Party">Birthday Party Event</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formMessage" className="mb-4">
          <Form.Label className="text-light small mb-1">Please share your message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Write your message..."
            className="bg-dark text-white border-secondary"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="warning" type="submit" className="px-4 py-2 fw-bold text-dark">
            Send Message
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default BookingForm;
