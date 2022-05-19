/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-indent */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
  return (
  <div className="carousel-wrapper">
  <Carousel infiniteLoop useKeyboardArrows autoPlay>
  <div>
  <img src="assets/img/slide/slide-1.jpg" />
  </div>
  <div>
  <img src="assets/img/slide/slide-2.jpg" />
  </div>
  <div>
  <img src="assets/img/slide/slide-3.jpg" />
  </div>
  </Carousel>
		</div>
  );
}
