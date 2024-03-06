// Navbar.js
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="sm" style={{height: '50px'}} sticky="top">
      <Navbar.Brand href="#home" className="mx-3">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav fill>
          <Nav.Link className="mx-5" href="#home">Home</Nav.Link>
          <Nav.Link className="mx-5" href="#link">Link</Nav.Link>
          <Nav.Link className="mx-5" href="#about">About</Nav.Link>
          <Nav.Link className="mx-5" href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
