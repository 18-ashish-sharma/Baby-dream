import React from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <div>
      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Gallery</h2>
              <ol>
                <li><Link to="/" className="active">Home</Link></li>
                <li>Gallery</li>
              </ol>
            </div>

          </div>
        </section>
        <section id="gallery" className="gallery">
          <div className="container">

            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="gallery-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-home">Home</li>
                  <li data-filter=".filter-beach">Beach</li>
                  <li data-filter=".filter-vacation">Vacation</li>
                </ul>
              </div>
            </div>

            <div className="row gallery-container">

              <div className="col-lg-4 col-md-6 gallery-item filter-home">
                <div className="gallery-wrap">
                  <img src="assets/img/gallery/home-1.jpg" className="img-fluid" alt="" />
                  <div className="gallery-info">
                    <h4>Home 1</h4>
                    <p>Home</p>
                    <div className="gallery-links">
                      <a href="assets/img/gallery/home-1.jpg" label className="glightbox" title="Home 1"><i className="bx bx-plus" /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 gallery-item filter-vacation">
                <div className="gallery-wrap">
                  <img src="assets/img/gallery/vacation-2.jpg" className="img-fluid" alt="" />
                  <div className="gallery-info">
                    <h4>Vacation 2</h4>
                    <p>Vacation</p>
                    <div className="gallery-links">
                      <a href="assets/img/gallery/vacation-2.jpg" label className="glightbox" title="Vacation 2"><i className="bx bx-plus" /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 gallery-item filter-home">
                <div className="gallery-wrap">
                  <img src="assets/img/gallery/home-2.jpg" className="img-fluid" alt="" />
                  <div className="gallery-info">
                    <h4>Home 2</h4>
                    <p>Home</p>
                    <div className="gallery-links">
                      <a href="assets/img/gallery/home-2.jpg" label className="glightbox" title="Home 2"><i className="bx bx-plus" /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 gallery-item filter-beach">
                <div className="gallery-wrap">
                  <img src="assets/img/gallery/beach-2.jpg" label className="img-fluid" alt="" />
                  <div className="gallery-info">
                    <h4>Beach 2</h4>
                    <p>Beach</p>
                    <div className="gallery-links">
                      <a href="assets/img/gallery/beach-2.jpg" label className="glightbox" title="Beach 2"><i className="bx bx-plus" /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 gallery-item filter-vacation">
                <div className="gallery-wrap">
                  <img src="assets/img/gallery/vacation-1.jpg" className="img-fluid" alt="" />
                  <div className="gallery-info">
                    <h4>Vacation 1</h4>
                    <p>Vacation</p>
                    <div className="gallery-links">
                      <a href="assets/img/gallery/vacation-1.jpg" label className="glightbox" title="Vacation 1"><i className="bx bx-plus" /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 gallery-item filter-home">
                <div className="gallery-wrap">
                  <img src="assets/img/gallery/home-3.jpg" className="img-fluid" alt="" />
                  <div className="gallery-info">
                    <h4>Home 3</h4>
                    <p>Home</p>
                    <div className="gallery-links">
                      <a href="assets/img/gallery/home-3.jpg" label className="glightbox" title="Home 3"><i className="bx bx-plus" /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 gallery-item filter-beach">
                <div className="gallery-wrap">
                  <img src="assets/img/gallery/beach-1.jpg" className="img-fluid" alt="" />
                  <div className="gallery-info">
                    <h4>Beach 1</h4>
                    <p>Beach</p>
                    <div className="gallery-links">
                      <a href="assets/img/gallery/beach-1.jpg" label className="glightbox" title="Beach 1"><i className="bx bx-plus" /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 gallery-item filter-beach">
                <div className="gallery-wrap">
                  <img src="assets/img/gallery/beach-3.jpg" className="img-fluid" alt="" />
                  <div className="gallery-info">
                    <h4>Beach 3</h4>
                    <p>Beach</p>
                    <div className="gallery-links">
                      <a href="assets/img/gallery/beach-3.jpg" label className="glightbox" title="Beach 3"><i className="bx bx-plus" /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 gallery-item filter-vacation">
                <div className="gallery-wrap">
                  <img src="assets/img/gallery/vacation-3.jpg" className="img-fluid" alt="" />
                  <div className="gallery-info">
                    <h4>Vacation 3</h4>
                    <p>Vacation</p>
                    <div className="gallery-links">
                      <a href="assets/img/gallery/vacation-3.jpg" label className="glightbox" title="Vacation 3"><i className="bx bx-plus" /></a>
                    </div>
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

export default Gallery;
