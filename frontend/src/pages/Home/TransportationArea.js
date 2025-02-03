import React, { useState } from "react";
import shape3 from '../../assets/img/shape/shape3.png';

const TransportationArea = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    width: "",
    commodity: "",
    distance: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="transportation-area">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <div className="transportation-form ptb-100">
              <div className="section-title">
                <span>Transportation</span>
                <h2>Take Your Goods Anywhere</h2>
              </div>

              <div className="transportation-shape">
                <img src={shape3} alt="icon" />
              </div>

              <form onSubmit={handleSubmit}>
                {[
                  { name: "height", placeholder: "Height (CM):" },
                  { name: "weight", placeholder: "Weight (KG):" },
                  { name: "width", placeholder: "Width (CM):" },
                  { name: "commodity", placeholder: "Type of commodity:" },
                  { name: "distance", placeholder: "Distance (KM):" },
                ].map((field) => (
                  <div className="form-group" key={field.name}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={field.placeholder}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                    />
                  </div>
                ))}

                <div className="form-btn">
                  <button type="submit" className="default-btn-one me-4">
                    Cost Calculate
                  </button>
                  {/* <button type="submit" className="default-btn-two">
                    Get A Full Quote
                  </button> */}
                </div>

                <h3>Get a brochure / 10% Discount on first order</h3>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="popup-video video-bg">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="video-btn">
                    <a
                      href="https://youtu.be/p10x4nxuA-s?si=46xmLZt3iDypgGHU"
                      className="popup-youtube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bx-play whiteText"></i>
                      <span className="ripple pinkBg"></span>
                      <span className="ripple pinkBg"></span>
                      <span className="ripple pinkBg"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationArea;
