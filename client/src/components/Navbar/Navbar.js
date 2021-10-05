import React from "react";
// Import React Router Link component for internal hyperlinks

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Adrian Auchterlonie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/aboutme">About Me</Nav.Link>
            <Nav.Link href="/work">Projects</Nav.Link>
            <Nav.Link href="/contact-me">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
