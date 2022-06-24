import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/images/logo.png";
const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant="light" expand="md">
      <Container>
        <Navbar.Brand>
          <img src={logo} width="50px" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/tickets">Tickets</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
