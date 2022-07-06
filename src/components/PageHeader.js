import React from 'react';
import Styled from 'styled-components';

import { Container, Navbar, Nav, Link } from 'react-bootstrap';

export default function PageHeader() {
  return(
    <React.Fragment>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Buy Things</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
