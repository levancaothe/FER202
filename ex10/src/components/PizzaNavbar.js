import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

function PizzaNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3 py-2">
      <Container fluid>
        <Navbar.Brand href="#home" className="fw-bold fs-4 text-white">
          Pizza House
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-3 align-items-center">
            <Nav.Link href="#home" className="text-light me-2">Home</Nav.Link>
            <Nav.Link href="#about" className="text-light me-2">About Us</Nav.Link>
            <Nav.Link href="#contact" className="text-light me-3">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 bg-dark text-white border-secondary"
              aria-label="Search"
              style={{ width: '180px' }}
            />
            <Button variant="danger" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PizzaNavbar;
