import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo"><Link to="/" className="active">Me &amp; Family</Link></h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link to="/" className="active">Home</Link></li>
              <li><Link to="/ourstory" className="">Ourstory</Link></li>
              <li><Link to="/events" className="">Events</Link></li>
              <li><Link to="/gallery" className="">Gallery</Link></li>
              <li><Link to="/contact" className="">Contact</Link></li>

            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>

        </div>
      </header>

    </div>

  );
}

export default Header;
