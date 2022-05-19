/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */

import React from 'react';
import CarouselComponent from './Carousel';

function Home() {
  return (
    <div>
      <main id="main">
        <CarouselComponent />
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>My & Family</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row content">
              <div className="col-lg-6">
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" />
                    {' '}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </li>
                  <li>
                    <i className="ri-check-double-line" />
                    {' '}
                    Duis aute irure dolor in reprehenderit in voluptate velit
                  </li>
                  <li>
                    <i className="ri-check-double-line" />
                    {' '}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <a href="our-story.html" className="btn-learn-more">Learn More</a>
              </div>
            </div>

          </div>
        </section>
        <section id="features" className="features">
          <div className="container">

            <div className="row">
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><i className="bi bi-laptop" /></div>
                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><i className="bi bi-bar-chart" /></div>
                <h4 className="title"><a href="">Dolor Sitema</a></h4>
                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><i className="bi bi-bounding-box" /></div>
                <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><i className="bi bi-broadcast" /></div>
                <h4 className="title"><a href="">Magni Dolores</a></h4>
                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><i className="bi bi-camera" /></div>
                <h4 className="title"><a href="">Nemo Enim</a></h4>
                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box">
                <div className="icon"><i className="bi bi-diagram-3" /></div>
                <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>

          </div>
        </section>
        <section id="recent-photos" className="recent-photos">
          <div className="container">
            <div className="section-title">
              <h2>Recent Photos</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="recent-photos-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide"><a href="assets/img/recent-photos/recent-photos-1.jpg" className="glightbox"><img src="assets/img/recent-photos/recent-photos-1.jpg" className="img-fluid" alt="" /></a></div>
                <div className="swiper-slide"><a href="assets/img/recent-photos/recent-photos-2.jpg" className="glightbox"><img src="assets/img/recent-photos/recent-photos-2.jpg" className="img-fluid" alt="" /></a></div>
                <div className="swiper-slide"><a href="assets/img/recent-photos/recent-photos-3.jpg" className="glightbox"><img src="assets/img/recent-photos/recent-photos-3.jpg" className="img-fluid" alt="" /></a></div>
                <div className="swiper-slide"><a href="assets/img/recent-photos/recent-photos-4.jpg" className="glightbox"><img src="assets/img/recent-photos/recent-photos-4.jpg" className="img-fluid" alt="" /></a></div>
                <div className="swiper-slide"><a href="assets/img/recent-photos/recent-photos-5.jpg" className="glightbox"><img src="assets/img/recent-photos/recent-photos-5.jpg" className="img-fluid" alt="" /></a></div>
                <div className="swiper-slide"><a href="assets/img/recent-photos/recent-photos-6.jpg" className="glightbox"><img src="assets/img/recent-photos/recent-photos-6.jpg" className="img-fluid" alt="" /></a></div>
                <div className="swiper-slide"><a href="assets/img/recent-photos/recent-photos-7.jpg" className="glightbox"><img src="assets/img/recent-photos/recent-photos-7.jpg" className="img-fluid" alt="" /></a></div>
                <div className="swiper-slide"><a href="assets/img/recent-photos/recent-photos-8.jpg" className="glightbox"><img src="assets/img/recent-photos/recent-photos-8.jpg" className="img-fluid" alt="" /></a></div>
              </div>
              <div className="swiper-pagination" />
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
