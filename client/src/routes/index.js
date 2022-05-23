import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import Home from '../pages/Home';
import Ourstory from '../pages/Ourstory';
import Contact from '../pages/Contact';
import Events from '../pages/Events';
import Gallery from '../pages/Gallery';

import { LoaderDiv } from '../components/style-components/Grid.style';
import Gif from '../components/images/gif3.gif';
import Login from '../pages/Login';

// eslint-disable-next-line react/prop-types
function Routing({ isLoading }) {
  return (

    <Row>
      {isLoading && (
        <LoaderDiv>
          <img src={Gif} alt="Loading" />
        </LoaderDiv>
      )}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ourstory" element={<Ourstory />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Row>
  );
}
const mapStateToProps = (state) => ({
  isLoading: state.loader.isLoading,
});

export default connect(mapStateToProps, null)(Routing);
