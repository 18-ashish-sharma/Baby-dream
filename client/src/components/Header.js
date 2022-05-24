/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  Icon,
  NavContainer,
  NavWrapper,
} from './style-components/Header.style';

function Header({ isLoggedIn }) {
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
              <Nav.Link><Link to="/" className="active">Home</Link></Nav.Link>
              <Nav.Link><Link to="/ourstory" className="">Ourstory</Link></Nav.Link>
              <Nav.Link><Link to="/events" className="">Events</Link></Nav.Link>
              <Nav.Link><Link to="/gallery" className="">Gallery</Link></Nav.Link>
              <Nav.Link><Link to="/contact" className="">Contact</Link></Nav.Link>
              <Nav.Link><Link to="/signup" className="">Signup</Link></Nav.Link>
              {
                isLoggedIn ? (<Nav.Link><Link to="/login" className="">Login</Link></Nav.Link>) : (<Nav.Link><Link to="/login" className="">Logout</Link></Nav.Link>)
              }
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
