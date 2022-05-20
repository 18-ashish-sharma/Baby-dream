import React from 'react';
import { Link } from 'react-router-dom';

function Ourstory() {
  return (
    <div>
      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Our Story</h2>
              <ol>
                <li><Link to="/" className="active">Home</Link></li>
                <li>Our Story</li>
              </ol>
            </div>

          </div>
        </section>
        <section id="story-intro" className="story-intro">
          <div className="container">

            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2">
                <img src="assets/img/intro.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circled" />
                    {' '}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check-circled" />
                    {' '}
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="bi bi-check-circled" />
                    {' '}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>

          </div>
        </section>

        <section id="featured-members" className="featured-members">
          <div className="container">

            <div className="row content">
              <div className="col-lg-6">
                <img src="assets/img/members/featured-members-1.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-3 pt-lg-0">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check" />
                    {' '}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check" />
                    {' '}
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </li>
                </ul>
              </div>
            </div>

            <div className="row content">
              <div className="col-lg-6 order-1 order-lg-2">
                <img src="assets/img/members/featured-members-2.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 order-2 order-lg-1 pt-3 pt-lg-0">
                <h3>Corporis temporibus maiores provident</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>

            <div className="row content">
              <div className="col-lg-6">
                <img src="assets/img/members/featured-members-3.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-3 pt-lg-0">
                <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                <p>
                  Cupiditate placeat cupiditate placeat est ipsam culpa.
                  Delectus quia minima quod.
                  Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.

                </p>
                <ul>
                  <li>
                    <i className="bi bi-check" />
                    {' '}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check" />
                    {' '}
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="bi bi-check" />
                    {' '}
                    Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.
                  </li>
                </ul>
              </div>
            </div>

            <div className="row content">
              <div className="col-lg-6 order-1 order-lg-2">
                <img src="assets/img/members/featured-members-4.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 order-2 order-lg-1 pt-3 pt-lg-0">
                <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>

          </div>
        </section>

        <section id="members" className="members">
          <div className="container">

            <div className="row">

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/members/member-1.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="/" label="a"><i className="bi bi-twitter" /></a>
                      <a href="/" label="a"><i className="bi bi-facebook" /></a>
                      <a href="/" label="a"><i className="bi bi-instagram" /></a>
                      <a href="/" label="a"><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <p>
                      Aut ex esse explicabo quia harum ea accusamus excepturi.
                      Temporibus at quia quisquam veritatis impedit.
                      Porro laborum voluptatum sed necessitatibus a saepe.
                      Deserunt laborum quasi consequatur voluptatum iusto sint qui fuga vel.
                      Enim eveniet sed quibusdam rerum in.
                      Non dicta architecto consequatur quo praesentium nesciunt.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/members/member-2.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="/" label="a"><i className="bi bi-twitter" /></a>
                      <a href="/" label="a"><i className="bi bi-facebook" /></a>
                      <a href="/" label="a"><i className="bi bi-instagram" /></a>
                      <a href="/" label="a"><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Niall Katz</h4>
                    <span>Marketing</span>
                    <p>
                      Aut ex esse explicabo quia harum ea accusamus excepturi.
                      Temporibus at quia quisquam veritatis impedit.
                      Porro laborum voluptatum sed necessitatibus a saepe.
                      Deserunt laborum quasi consequatur voluptatum iusto sint qui fuga vel.
                      Enim eveniet sed quibusdam rerum in.
                      Non dicta architecto consequatur quo praesentium nesciunt.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                  <div className="member-img">
                    <img src="assets/img/members/member-3.jpg" className="img-fluid" alt="" />
                    <div className="social">
                      <a href="/" label="a"><i className="bi bi-twitter" /></a>
                      <a href="/" label="a"><i className="bi bi-facebook" /></a>
                      <a href="/" label="a"><i className="bi bi-instagram" /></a>
                      <a href="/" label="a"><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Demi Lewis</h4>
                    <span>Financing</span>
                    <p>
                      Amet labore numquam corrupti est.
                      Nostrum amet voluptas consectetur dolor voluptatem architecto
                      distinctio consequuntur eligendi. Quam impedit enim aut nesciunt
                      aut dicta quam exercitationem. Reprehenderit exercitationem magnam.
                      Ullam similique ut voluptas totam nobis porro accusamus nulla omnis.

                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

    </div>
  );
}

export default Ourstory;
