import React from 'react';
import { Link } from 'react-router-dom';

function Events() {
  return (
    <div>

      <main id="main">

        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Events</h2>
              <ol>
                <li><Link to="/" className="active">Home</Link></li>
                <li>Events</li>
              </ol>
            </div>

          </div>
        </section>

        <section id="event-list" className="event-list">
          <div className="container">

            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <div className="card-img">
                    <img src="assets/img/events-1.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Lara &apos; s 1th Birthday</h5>
                    <p className="fst-italic text-center">Sunday, September 26th at 7:00 pm</p>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <div className="card-img">
                    <img src="assets/img/events-2.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">James 6th Birthday</h5>
                    <p className="fst-italic text-center">Sunday, November 15th at 7:00 pm</p>
                    <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
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

export default Events;
