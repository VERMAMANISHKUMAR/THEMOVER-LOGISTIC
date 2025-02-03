import React from 'react';
import Slider from 'react-slick';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="hero-slider-container">
      <Slider {...settings} className="hero-slider owl-carousel owl-theme">
        <div className="hero-slider-item item-bg1">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="banner-content">
                  <span>Since 1992</span>
                  <h1>Transport & Logistic Services</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="/contact" className="default-btn-one me-3">
                    Contact Us
                  </a>
                  <a href="#" className="default-btn-two">
                    Get A Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
