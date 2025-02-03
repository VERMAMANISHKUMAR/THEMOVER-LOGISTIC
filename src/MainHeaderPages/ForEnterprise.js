import React from 'react';
// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Porter from './Porter';

import '../assets/styles/ForEnterprise.css';
// Import images
import image1 from "../assets/img/hero-slider/hero-slider1.jpg";
import image2 from "../assets/img/hero-slider/hero-slider2.jpg";
import image3 from "../assets/img/hero-slider/hero-slider3.jpg";
import image4 from "../assets/img/hero-slider/hero-slider4.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ForEnterprise = () => {
  const slidesData = [
    { image: image1, description: "Transport & Logistics Services" },
    { image: image2, description: "Transport & Logistics Services" },
    { image: image3, description: "Transport & Logistics Services" },
    { image: image4, description: "Transport & Logistics Services" },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1600px',margin: '0 auto' }}>
      {/* <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>For Enterprise</h2> */}
      <Swiper
        // Install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll with 3s delay
      >
        {/* Render slides dynamically */}
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div style={slideContainerStyle}>
              <img src={slide.image} alt={`Slide ${index + 1}`} style={imageStyle} />
              <div style={overlayStyle}>
                <p style={descriptionStyle}>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Porter/>
  
    </div>
  );
};

// Inline styles for slide container
const slideContainerStyle = {
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  marginTop:'120px'

};

const imageStyle = {
  width: '100%',
  height: '600px',
};

const overlayStyle = {
  position: 'absolute',
  bottom: '10%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  //backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  padding: '10px 15px',
  borderRadius: '8px',
  textAlign: 'center',
}

const descriptionStyle = {
  color: '#fff',
  fontSize: '100px',
  margin:'220px',
  textAlign:'start'
};

export default ForEnterprise;
