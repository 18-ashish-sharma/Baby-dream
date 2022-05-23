import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  Icon,
  NavContainer,
  NavWrapper,
} from './style-components/Header.style';

function Header() {
  return (
    <NavContainer>
      <Navbar fixed="" collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          {/* <Logo /> */}
          <Icon>
            <img src="assets/images/pink7.svg" alt="pink7" />
          </Icon>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavWrapper>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="ourstory">Ourstory</Nav.Link>
              <Nav.Link href="events">Events</Nav.Link>
              <Nav.Link href="gallery">Gallery</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
              <Nav.Link href="login">Login</Nav.Link>
            </Nav>
          </NavWrapper>
        </Navbar.Collapse>
      </Navbar>
    </NavContainer>

  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.loader.isLoggedIn,
  userData: state.loader.userData,
});
export default connect(mapStateToProps, null)(Header);
