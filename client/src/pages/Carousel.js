import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src="assets/img/slide/slide-1.jpg" alt="test" />
        </div>
        <div>
          <img src="assets/img/slide/slide-2.jpg" alt="test" />
        </div>
        <div>
          <img src="assets/img/slide/slide-3.jpg" alt="test" />
        </div>
      </Carousel>
    </div>
  );
}
