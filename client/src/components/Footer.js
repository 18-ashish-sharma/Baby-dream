/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */
import React from 'react';

function Footer() {
  return (
        <div>
            <footer id="footer">
                <div className="container">
                    <h3>MeFamily</h3>
                    <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                    <div className="social-links">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                    <div className="copyright">
                        &copy; Copyright 
{' '}
<strong><span>MeFamily</span></strong>
. All Rights Reserved
                    </div>
                    <div className="credits">
                        {/* <!-- All the links in the footer should remain intact. --> */}
                        {/* <!-- You can delete the links only if you purchased the pro version. --> */}
                        {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
                        {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/family-multipurpose-html-bootstrap-template-free/ --> */}
                        Designed by 
{' '}
<a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>
        </div>

  );
}

export default Footer;
