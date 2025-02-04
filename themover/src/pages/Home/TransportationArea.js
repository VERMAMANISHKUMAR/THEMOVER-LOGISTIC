import React, { useState } from "react";
import shape3 from '../../assets/img/shape/shape3.png';
import '../../assets/styles/TransportationArea.css';

const TransportationArea = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    width: "",
    commodity: "electronics",
    distance: "",
    cost: null,
    discountedCost: null, // New state for discounted cost
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateCost = () => {
    let calculatedCost = 0;
    const { height, weight, width, commodity, distance } = formData;

    if (commodity === "electronics") {
      calculatedCost = weight * distance * 10;
    } else if (commodity === "clothing") {
      calculatedCost = weight * distance * 5;
    } else if (commodity === "documents") {
      calculatedCost = distance * 2;
    }

    if (height > 100 || width > 50) {
      calculatedCost += 50;
    }

    // Calculate 10% discount
    const discount = calculatedCost * 0.1;
    const discountedCost = calculatedCost - discount;

    setFormData({
      ...formData,
      cost: calculatedCost.toFixed(2),
      discountedCost: discountedCost.toFixed(2),
    });
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
              <form>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Height (CM)"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Weight (KG)"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Width (CM)"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <select
                    className="form-control"
                    name="commodity"
                    value={formData.commodity}
                    onChange={handleChange}
                  >
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="documents">Documents</option>
                  </select>
                </div>

                <div className="form-group mb-30">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Distance (KM)"
                    name="distance"
                    value={formData.distance}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-btn">
                  <button type="button" className="default-btn-one me-4" onClick={calculateCost}>
                    Cost Calculate
                  </button>
                </div>

                {formData.cost !== null && (
                  <>
                    <h3>Original Cost: <del>${formData.cost}</del></h3>
                    <h3>Get a brochure / 10% Discount on first order</h3>
                    <h3 style={{ color: "wight" }}>Discounted Cost: ${formData.discountedCost} (10% OFF)</h3>
                  </>
                )}

                
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
