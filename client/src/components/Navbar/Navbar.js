import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "react-bootstrap/Navbar";
import { Navbar, Nav, Container } from "react-bootstrap";
import("react-dom");

class Navigationbar extends React.Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Adrian Auchterlonie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#AboutMe">About Me </Nav.Link>
            <Nav.Link href="#Work">Work</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
export default Navigationbar;
