import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Badge } from 'reactstrap';

const AppNavbar = () => {
  const cart = useSelector((state) => state.shop.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar color="dark" dark expand="md" className="px-4 mb-4">
      <NavbarBrand tag={Link} to="/">Redux Thunk Store</NavbarBrand>
      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/add-product">Add Product</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/cart">
            Cart <Badge color="danger" pill>{totalItems}</Badge>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
