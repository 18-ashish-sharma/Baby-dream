/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

function Home() {
  return (
    <div>
      <section className="">
        <div className="celebrate">
          <div className="container">
            <div className="row perfect">
              <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7 col-12 mt-5">
                <h2>Celebrate life with the perfect card or invitation</h2>
                <p>
                  Choose from our library of stunning layouts to create an original
                  and thgoughtful card with
                  ease.

                </p>
                <button type="button" className="register">REGISTER WITH US</button>
              </div>

              <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-12 mt-5">
                <div className="hero-video">
                  <video width="100%" height="auto" controls>
                    <source src="assets/video/pexels-alena-darmel-7192503.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gallery">
        <div className="container mt-5">
          <div className="row">
            <div className="category">
              <div className="category-content">
                <h2>Category/Sub Category</h2>

                <ul>
                  <li>
                    <input type="checkbox" id="option1" />
                    <label htmlFor="option1">Greetings</label>
                  </li>
                  <li>
                    <input type="checkbox" id="option2" />
                    <label htmlFor="option2">Posters</label>
                  </li>
                  <li>
                    <input type="checkbox" id="option3" />
                    <label htmlFor="option3">Flyers</label>
                  </li>
                  <li>
                    <input type="checkbox" id="option" />
                    <label htmlFor="option">Sales & Promotions</label>
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" className="subOption" />
                          {' '}
                          Greetings
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="subOption" />
                          {' '}
                          Flyers
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="subOption" />
                          {' '}
                          Infographics
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="subOption" />
                          {' '}
                          Brochure
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="subOption" />
                          {' '}
                          News Letters
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="subOption" />
                          {' '}
                          Promotional Event
                          Banner
                        </label>

                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="subOption" />
                          {' '}
                          Sales & Discounts
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="subOption" />
                          {' '}
                          Proposal
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="subOption" />
                          {' '}
                          Digital Signage 16:9
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="subOption" />
                          {' '}
                          Digital Signage 9:16
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="subOption" />
                          {' '}
                          Printable Signage
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="subOption" />
                          {' '}
                          Zoom Cover Image
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="subOption" />
                          {' '}
                          Google meet Cover
                          Image
                        </label>

                      </li>
                      <li>
                        <label>
                          <input type="checkbox" className="subOption" />
                          {' '}
                          Social Media
                          Creatives
                        </label>

                      </li>
                    </ul>
                    <li>
                      <input type="checkbox" id="option4" />
                      <label htmlFor="option4">Greetings</label>
                    </li>
                    <li>
                      <input type="checkbox" id="option5" />
                      <label htmlFor="option5">Social Media</label>
                    </li>
                    <li>
                      <input type="checkbox" id="option6" />
                      <label htmlFor="option6">Invitations</label>
                    </li>
                    <li>
                      <input type="checkbox" id="option7" />
                      <label htmlFor="option7">Political</label>
                    </li>
                    <li>
                      <input type="checkbox" id="option8" />
                      <label htmlFor="option8">Business</label>
                    </li>
                    <li>
                      <input type="checkbox" id="option9" />
                      <label htmlFor="option9">Educational</label>
                    </li>
                    <li>
                      <input type="checkbox" id="option10" />
                      <label htmlFor="option10">Sports</label>
                    </li>
                    <li>
                      <input type="checkbox" id="option11" />
                      <label htmlFor="option11">Health</label>
                    </li>

                    <li>
                      <input type="checkbox" id="option12" />
                      <label htmlFor="option12">Gift Certificates</label>
                    </li>
                    <li>
                      <input type="checkbox" id="option13" />
                      <label htmlFor="option13">Stickers</label>
                    </li>
                  </li>
                </ul>
                <div className="tags">
                  <h2>Tags</h2>
                  <ul>
                    <li>
                      <input type="checkbox" id="option1" />
                      <label htmlFor="option">Hindu Festivals</label>
                    </li>
                    <li>
                      <input type="checkbox" id="option2" />
                      <label htmlFor="option">Diwali Greetings</label>
                    </li>
                    <li>
                      <input type="checkbox" id="option3" />
                      <label htmlFor="option">Christmas</label>
                    </li>
                    <li>
                      <input type="checkbox" id="option3" />
                      <label htmlFor="option">Discounts</label>
                    </li>
                    <li>
                      <input type="checkbox" id="option3" />
                      <label htmlFor="option">Facebook</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="upcoming-events">
              <h2>Upcoming Events</h2>

              <div className="owl-carousel owl-theme feature-carousel mt-4">
                <div className="main-item">
                  <a href="/">
                    <div className="item">
                      <div className="item-image">
                        <img src="assets/images/MOthers-Day.jpg" alt="Product-One" />
                      </div>
                      <div className="item-body">
                        <h3>Poster of the day</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="main-item">
                  <a href="/">
                    <div className="item">
                      <div className="item-image">
                        <img src="assets/images/Env.jpg" alt="Product-two" />
                      </div>
                      <div className="item-body">
                        <h3>International Environment Day</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="main-item">
                  <a href="/">
                    <div className="item">
                      <div className="item-image">
                        <img src="assets/images/Tech.jpg" alt="Product-three" />
                      </div>
                      <div className="item-body">
                        <h3>Technology Day</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="main-item">
                  <a href="/">
                    <div className="item">
                      <div className="item-image">
                        <img src="assets/images/Rakhi.jpg" alt="Product-four" />
                      </div>
                      <div className="item-body">
                        <h3>Raksha Bandhan</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="main-item">
                  <a href="/">
                    <div className="item">
                      <div className="item-image">
                        <img src="assets/images/Ganesh-Chaturthi.jpg" alt="Product-four" />
                      </div>
                      <div className="item-body">
                        <h3>Ganesh Chaturthi</h3>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="main-item">
                  <a href="/">
                    <div className="item">
                      <div className="item-image">
                        <img src="assets/images/Eid-ul-Fitr.jpg" alt="Product-four" />
                      </div>
                      <div className="item-body">
                        <h3>Eid-ul-Fitr</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid-wrapper">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="tall">
                  <img
                    src="https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                    alt=""
                  />
                </div>
                <div className="wide">
                  <img
                    src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src=" https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=60"
                    alt=""
                  />
                </div>
                <div className="tall">
                  <img
                    src="https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2134&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="big">
                  <img
                    src="https://images.unsplash.com/photo-1588492885706-b8917f06df77?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1588247866001-68fa8c438dd7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=564&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="wide">
                  <img
                    src="https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="big">
                  <img
                    src="https://images.unsplash.com/photo-1572914857229-37bf6ee8101c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="tall">
                  <img
                    src="https://images.unsplash.com/photo-1588453862014-cd1a9ad06a12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1588414734732-660b07304ddb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1588224575346-501f5880ef29?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1574798834926-b39501d8eda2?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1353&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="wide">
                  <img
                    src="https://images.unsplash.com/photo-1588263823647-ce3546d42bfe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1587897773780-fe72528d5081?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1489&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="wide">
                  <img
                    src="https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1489&amp;q=80"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1587572236558-a3751c6d42c0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                    alt=""
                  />
                </div>
                <div className="wide">
                  <img
                    src="https://images.unsplash.com/photo-1583542225715-473a32c9b0ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="view-more">
                <a href="/" className="btn2">View more</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <section className="why-us">
        <div className="container">
          <div className="row">
            <div className="why-us-content">
              <div className="why-us-inner">
                <h3>Why Us</h3>
                <h2>Celebrate life with the perfect card or invitation</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Pellentesque venenatis nibh sed tempus redtre
                  commodo. Intoonsectetur lacus in consectetur.

                  Etiam imperdiet odio in orci egestas, at tincidunt
                  libero vehicula. Vestibulum faucibus urna sed nulla
                  vestibulum volutpat.

                  Etiam imperdiet odio in orci egestas, at tincidunt
                  libero vehicula. Vestibulum faucibus urna sed nulla
                  vestibulum volutpat.
                  Etiam imperdiet odio in orci egestas, at tincidunt
                  libero vehicula. Vestibulum faucibus urna sed nulla
                  vestibulum volutpat.
                </p>
              </div>
            </div>
            <div className="why-us-feature">
              <div className="why-us-f-inner">
                <div className="box box1">
                  <img src="assets/images/box icon 1.svg" alt="" />
                  <h4>Unlimited Access</h4>
                  <p>
                    Lorem ipsum doloramet,consectetur adipiscing elit.
                    Pellente sque reft venenatis nibh

                  </p>
                </div>
                <div className="box box2">
                  <img src="assets/images/box icon 2.svg" alt="" />
                  <h4>Never Forget</h4>
                  <p>
                    Lorem ipsum doloramet,consectetur adipiscing elit.
                    Pellente sque reft venenatis nibh

                  </p>
                </div>
                <div className="box box3">
                  <img src="assets/images/box icon 3.svg" alt="" />
                  <h4>Plan Ahead</h4>
                  <p>
                    Lorem ipsum doloramet,consectetur adipiscing elit.
                    Pellente sque reft venenatis nibh

                  </p>
                </div>
                <div className="box box4">
                  <img src="assets/images/box icon 4.svg" alt="" />
                  <h4>Add a gift</h4>
                  <p>
                    Lorem ipsum doloramet,consectetur adipiscing elit.
                    Pellente sque reft venenatis nibh

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-clients">
        <div className="container">
          <div className="row">
            <h1>Our Clients Says</h1>
          </div>
          <div className="row">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="item-img">
                  <img src="assets/images/user1.jpg" alt="" />
                </div>
                <h2>Emily Parkar</h2>
                <h4>Founder, Red Chill Restaurant</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa libero nam eligendi aliquam
                  recusandae magni cum sit molestias, at officia, consequatur
                  dolore iure odio possimus autem
                  illo. Temporibus hic, asperiores similique consequuntur odit optio blanditiis.

                </p>
              </div>
              <div className="item">
                <div className="item-img">
                  <img src="assets/images/user2.jpg" alt="" />
                </div>
                <h2>Jack Doe</h2>
                <h4>Founder, Red Chill Restaurant</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa libero nam eligendi aliquam
                  recusandae magni cum sit molestias, at officia,
                  consequatur dolore iure odio possimus autem
                  illo. Temporibus hic, asperiores similique consequuntur odit optio blanditiis.

                </p>

              </div>
              <div className="item">
                <div className="item-img">
                  <img src="assets/images/user3.jpg" alt="" />
                </div>
                <h2>Ben Wilson</h2>
                <h4>Founder, Red Chill Restaurant</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa libero nam eligendi aliquam
                  recusandae magni cum sit molestias, at officia,
                  consequatur dolore iure odio possimus autem
                  illo. Temporibus hic, asperiores similique consequuntur odit optio blanditiis.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
