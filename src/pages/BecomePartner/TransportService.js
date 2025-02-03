import React from 'react';
import "../../assets/styles/TransportService.css";
import image1 from '../../assets/img/TransportService/Logistics-5.png';
import image2 from '../../assets/img/TransportService/images-3.png';
import image3 from '../../assets/img/TransportService/Logistics-6.avif';
const TransportService = () => {
  return (
    <div className="transport-service-container">
      <h2>Porter, your go-to goods transport service!</h2>

      <div className="service-cards">
        <div className="service-card">
          <img src={image1} alt="Truck Icon" className="service-icon" /> {/* Replace with your icon path */}
          <h4>Variety of goods vehicle for rent</h4>
          <p>From Tata Ace to Pickup 8FT to Canter 14FT - you want it, we got it!</p>
        </div>
        <div className="service-card">
          <img src={image2} alt="Calendar Icon" className="service-icon" /> {/* Replace with your icon path */}
          <h4>Online goods transport services available anytime</h4>
          <p>Book trucks via the Porter app at your convenience whenever you want</p>
        </div>
        <div className="service-card">
          <img src={image3} alt="Phone Icon" className="service-icon" /> {/* Replace with your icon path */}
          <h4>A goods transportation app with streamlined interface</h4>
          <p>Booking, choosing and ordering a truck is easy. Getting a quick fare estimate is even easier.</p>
        </div>
      </div>
    </div>
  );
};

export default TransportService;