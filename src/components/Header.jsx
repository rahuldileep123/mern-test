import React from 'react'
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home">Education</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">services</Nav.Link>
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header