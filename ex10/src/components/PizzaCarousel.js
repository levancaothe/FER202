import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

function PizzaCarousel() {
  return (
    <div className="position-relative mb-5">
      <Carousel controls={true} indicators={true} interval={3000} fade={false}>
        <Carousel.Item style={{ height: '480px' }}>
          <img
            className="d-block w-100 h-100"
            src={banner1}
            alt="Neapolitan Pizza"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay-box text-center text-white p-4 rounded shadow">
            <h1 className="fw-bold display-4 mb-2">Neapolitan Pizza</h1>
            <p className="fs-5 mb-0 font-italic">Authentic Italian taste in every bite</p>
          </div>
        </Carousel.Item>

        <Carousel.Item style={{ height: '480px' }}>
          <img
            className="d-block w-100 h-100"
            src={banner2}
            alt="Fresh From Oven"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay-box text-center text-white p-4 rounded shadow">
            <h1 className="fw-bold display-4 mb-2">Fresh From Oven</h1>
            <p className="fs-5 mb-0 font-italic">Handcrafted with premium ingredients</p>
          </div>
        </Carousel.Item>

        <Carousel.Item style={{ height: '480px' }}>
          <img
            className="d-block w-100 h-100"
            src={banner3}
            alt="Special Discount"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay-box text-center text-white p-4 rounded shadow">
            <h1 className="fw-bold display-4 mb-2">Special Discount</h1>
            <p className="fs-5 mb-0 font-italic">Enjoy 20% off on all weekend orders</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PizzaCarousel;
