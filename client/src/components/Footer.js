/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-about">
              <div className="footer-logo">
                <img src="assets/images/pink7.svg" alt="pink7" />
              </div>
              <p>
                Pink7 is a leading agency for brand promotion,
                connecting millions of customers with the
                merchant.

              </p>
            </div>
            <div className="quick-links">
              <h2>Explore</h2>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </div>
            <div className="policy">
              <h2>Explore</h2>
              <ul>
                <li><a href="/">Register with Us</a></li>
                <li>
                  <a href="/">
                    Privacy Policy
                  </a>

                </li>
                <li><a href="/">Terms of Services</a></li>
              </ul>
            </div>
            <div className="get-connect">
              <h2>Get Connect</h2>
              <p>
                Are we friends on social media yet? Use the
                bottom below to connect,then join my list to your
                right.

              </p>
              <div className="social-links">
                <a href="/"><i className="fa-brands fa-whatsapp" /></a>
                <a href="/"><i className="fa-brands fa-facebook-f" /></a>
                <a href="/"><i className="fa-brands fa-twitter" /></a>
                <a href="/"><i className="fa-brands fa-instagram" /></a>
                <a href="/"><i className="fa-brands fa-youtube" /></a>
                <a href="/"><i className="fa-brands fa-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="container-fluid">
        <div className="row">
          <div className="bottom">
            <p className="text my-1">
              &copy; 2020 All Rights Reserved Terms of Use and Privacy Policy
              <i
                className="fa fa-heart"
                aria-hidden="true"
              />
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;
