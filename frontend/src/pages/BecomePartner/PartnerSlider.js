import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partner1 from "../../assets/img/partner/partner1.png";
import partner2 from "../../assets/img/partner/partner2.png";
import partner3 from "../../assets/img/partner/partner3.png";
import partner4 from "../../assets/img/partner/partner4.png";
import partner5 from "../../assets/img/partner/partner5.png";
import partner6 from "../../assets/img/partner/partner6.png";

const PartnerSlider = () => {
  const partners = [partner1, partner2, partner3, partner4, partner5, partner6];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } }
    ]
  };

  return (
    <div className="partner-area pb-100">
      <div className="container">
        <div className="section-title">
          <span>Partner</span>
          <h2>20+ Companies Trusted us and Getting Results</h2>
        </div>
        <Slider {...settings} className="partner-slider">
          {partners.map((partner, index) => (
            <div className="partner-slider-item" key={index}>
              <a href="#">
                <img src={partner} alt={`Partner ${index + 1}`} />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerSlider;
