import React, { useState } from "react";
import "../../assets/styles/CostCalculator.css"; 

const CostCalculator = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [commodity, setCommodity] = useState("electronics");
  const [distance, setDistance] = useState(0);
  const [cost, setCost] = useState(null);

  const calculateCost = () => {
    let calculatedCost = 0;

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

    setCost(calculatedCost.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Cost Calculator</h1>
      
      <label>Height (CM):</label>
      <input type="number" value={height} onChange={(e) => setHeight(parseFloat(e.target.value) || 0)} />

      <label>Weight (KG):</label>
      <input type="number" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value) || 0)} />

      <label>Width (CM):</label>
      <input type="number" value={width} onChange={(e) => setWidth(parseFloat(e.target.value) || 0)} />

      <label>Type of Commodity:</label>
      <select value={commodity} onChange={(e) => setCommodity(e.target.value)}>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="documents">Documents</option>
      </select>

      <label>Distance (KM):</label>
      <input type="number" value={distance} onChange={(e) => setDistance(parseFloat(e.target.value) || 0)} />

      <button onClick={calculateCost}>COST CALCULATE</button>

      {cost !== null && <div id="result">Estimated Cost: ${cost}</div>}
    </div>
  );
};

export default CostCalculator;
