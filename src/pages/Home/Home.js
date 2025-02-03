import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ServicesArea from "./ServicesArea";
import ChooseArea from "./ChooseArea";
import TransportationArea from './TransportationArea'
import Counter from '../Home/Counter'
import MegaImage from "../../MainHeaderPages/MegaImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import '../../assets/styles/HeroSlider.css'
const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      bgClass: "item-bg1",
      title: "Transport & Logistic Services 24x7 Support Available",
      description:
        "",
    },
    {
      id: 2,
      bgClass: "item-bg2",
      title: "Reliable Logistic Support",
      description:
        "",
    },
    {
      id: 3,
      bgClass: "item-bg3",
      title: "Efficient Freight & Transport Services  Round-the-Clock Support",
      description:
        "",
    },
    {
      id: 4,
      bgClass: "item-bg4",
      title: "Fast & Safe Logistic Delivery  24x7 Availability",
      description:
        "",
    },
    {
      id: 5,
      bgClass: "item-bg5",
      title: "Comprehensive Logistic Services  Available Anytime",
      description:
        "",
    },
    {
      id: 6,
      bgClass: "item-bg6",
      title: "Reliable Transport & Logistic Solutions  24x7 Support",
      description:
        "",
    },
    {
      id: 7,
      bgClass: "item-bg7",
      title: "Seamless Transportation Services Always Ready to Assist",
      description:
        "",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    
  };

  return (
    <div className="hero-slider">
      <Slider {...sliderSettings}>
        {slides.map((slide) => (
          <div key={slide.id} className={`hero-slider-item ${slide.bgClass}`}>
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="banner-content">
                    <span>Since 1992</span>
                    <h1>{slide.title}</h1>
                    <p className="description">{slide.description}</p>
                    <Link to="/contact" className="default-btn-one me-3">
                      Contact Us
                    </Link>
                    {/* <Link to="/services" className="default-btn-two">
                      Our Services
                    </Link>    */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <ServicesArea />
       <ChooseArea />
       <Counter/>
        <MegaImage/>
      <TransportationArea/>
    </>
  );
};

export default HomePage;
