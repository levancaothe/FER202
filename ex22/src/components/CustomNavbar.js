import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const CustomNavbar = () => {
  return (
    <Navbar color="dark" dark expand="md" className="px-3">
      <NavbarBrand tag={Link} to="/">Logo</NavbarBrand>
      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/profile/123">Profile with ID (123)</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
