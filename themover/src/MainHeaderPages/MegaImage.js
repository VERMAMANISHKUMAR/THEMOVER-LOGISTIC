import React from 'react';

import '../assets/styles/MegaImage.css';
import Ahmedabad from '../assets/assert/MegaImage/Ahmedabad.webp';
import Bangalore from '../assets/assert/MegaImage/Bangalore.webp';
import Chandigarh from '../assets/assert/MegaImage/Chandigarh.webp';
import Coimbatore from '../assets/assert/MegaImage/Coimbatore.webp';
import Delhi from '../assets/assert/MegaImage/Delhi.webp';
import Hyderabad from '../assets/assert/MegaImage/Hyderabad.webp';
import Jaipur from '../assets/assert/MegaImage/Jaipur.webp';
import Kochi from '../assets/assert/MegaImage/Kochi.webp';
import Kolkata from '../assets/assert/MegaImage/Kolkata.webp';
import Lucknow from '../assets/assert/MegaImage/Lucknow.webp';
import Ludhiana from '../assets/assert/MegaImage/Ludhiana.webp';
import Mumbai from '../assets/assert/MegaImage/Mumbai.webp';
const cityImages = [
  { city: "Ahmedabad", image: Ahmedabad },
  { city: "Bangalore", image: Bangalore },
  { city: "Chandigarh", image: Chandigarh },
  { city: "Coimbatore", image: Coimbatore },
  { city: "Delhi", image: Delhi },
  { city: "Hyderabad", image: Hyderabad },
  { city: "Jaipur", image: Jaipur },
  // { city: "Kanpur", image: Kanpur },
  { city: "Kochi", image: Kochi },
  { city: "Kolkata", image: Kolkata },
  { city: "Lucknow", image: Lucknow },
  { city: "Ludhiana", image: Ludhiana },
  { city: "Mumbai", image: Mumbai },
 
];

function MegaImage() {
  return (
    <div className="mega-image-container">
     <h2 style={{fontSize:'28.8px', fontWeight:'600'}}>WE ARE TRANSFORMING CITIES</h2>
      {cityImages.map((cityData) => (
        <div className="city-image-container" key={cityData.city}>
          <img src={cityData.image} alt={cityData.city} />
          <p>{cityData.city}</p>
        </div>
      ))}
    </div>
  );
}

export default MegaImage;
