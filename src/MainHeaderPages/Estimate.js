import React, { useState } from 'react';
import '../assets/styles/Estimate.css';
import Porter1 from '../assets/assert/Img-1.webp';
import Porter2 from  '../assets/assert/Img-2.webp';
import Porter3 from  '../assets/assert/Img-3.webp';
import Porter4 from  '../assets/assert/Img-4.webp';

const services = [
  {
    icon: Porter1,
    title: 'Two Wheelers',
  },
  {
    icon: Porter2,
    title: 'Trucks',
  },
  {
    icon: Porter3,
    title: 'Packers & Movers',
  },
  {
    icon: Porter4,
    title: 'Intercity Courier Service',
  },
];

function Estimate() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeForm = () => {
    setSelectedService(null);
  };

  return (
    <div className="estimate-container">
      <div className="estimate-header">
        <h1>Get an Estimate</h1>
      </div>

      <div className="service-section">
        {services.map((service, index) => (
          <div
            className="service-option"
            key={index}
            onClick={() => handleServiceClick(service)}
          >
            <img src={service.icon} alt={service.title} className="service-icon" />
            <span className="service-title">{service.title}</span>
            <span className="arrow">{'>'}</span>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="estimate-form">
          <h3>{`Estimate Details for ${selectedService.title}`}</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="details">Details</label>
              <textarea
                id="details"
                name="details"
                rows="4"
                placeholder="Provide additional details here"
              ></textarea>
            </div>
            <div className="form-buttons">
              <button type="submit" className="submit-button">
                Submit
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={closeForm}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Estimate;
