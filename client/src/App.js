import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Ourstory from './pages/Ourstory';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ourstory" element={<Ourstory />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
