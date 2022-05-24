/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button, Col, Form, Row,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { signUp } from '../redux/actions';

function Signup({ signUp, isLoggedIn }) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: '',
    mobile: '',
    email: '',
    password: '',
    dob: '',

  });
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:8080/api/auth/signup';
    signUp(url, state);
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  return (
    <Row>
      <Col
        md={6}
        className="p-5 m-auto shadow-sm rounded-lg"
      >
        <img src="assets/images/login-image.png" alt="login-img" />
      </Col>
      <Col
        md={6}
        className="p-5 m-auto shadow-sm rounded-lg"
      >
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              onChange={(e) => handleChange(e)}
              value={state.username}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => handleChange(e)}
              value={state.email}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile Number"
              name="mobile"
              onChange={(e) => handleChange(e)}
              value={state.mobile}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
              value={state.password}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>DOB</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date Of Birth"
              name="dob"
              onChange={(e) => handleChange(e)}
              value={state.dob}
            />
          </Form.Group>

          {
           isLoggedIn
             ? (
               <Button variant="success btn-block" type="submit" onClick={handleSubmit}>
                 Signup
               </Button>
             )
             : (
               <Button variant="success btn-block" type="submit" onClick={handleSubmit}>
                 Logout
               </Button>
             )
         }
          <br />
          <br />
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Already Sign up?</Form.Label>
            <br />
            <Link to="/login" className="">Login</Link>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}

const mapDispatchToProps = {
  signUp,
};
const mapStateToProps = (state) => ({
  isLoggedIn: state.loader.isLoggedIn,
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
