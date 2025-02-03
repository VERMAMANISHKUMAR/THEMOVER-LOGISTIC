import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../assets/styles/BecomePartner.css';
import back from '../../assets/img/services/backImg.jpg';
import TransportService from '../BecomePartner/TransportService';
import PartnerSlider from "../BecomePartner/PartnerSlider";
// import Testimonials from '../BecomePartner/Testimonials'
const BecomePartner = () => {
  const [city, setCity] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [source, setSource] = useState("");

  const cities = ["Mumbai", "Delhi NCR", "Ghazabad", "Bangalore", "Hyderabad", "Kolkata", "Ahmedabad", "Jaipur", "Surat", "Nagpur", "Kanpur", "Lucknow", "Patna", "Bhopal", "Indore", "Vadodara", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Srinagar", "Amritsar", "Noida", "Chandigarh", "Gurgaon", "Gurugram", "Bhubaneswar", "Kochi", "Thiruvananthapuram", "Dehradun", "Agartala", "Aizawl", "Bengaluru", "Bhopal", "Bhubaneswar", "Chandigarh", "Chennai", "Daman and Diu", "Dehradun", "New Delhi", "Dispur", "Gandhinagar", "Gangtok", "Hyderabad", "Imphal", "Itanagar", "Jaipur", "Kohima", "Kolkata", "Lucknow", "Mumbai", "Panaji", "Patna", "Raipur", "Ranchi", "Shillong", "Shimla", "Srinagar", "Thiruvananthapuram"];
  const vehicles = ["Truck", "Van", "Car", "Motorbike"];
  const sources = ["Referral", "Online Advertisement", "Social Media", "Other"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city || !vehicle || !source) {
      toast.error("Please fill in all fields!");
      return;
    }
    toast.success("Form submitted successfully!");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${back})` }}>
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-lg w-full manish">
          <h2 className="text-2xl font-bold text-center mb-6">Become a Partner</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Enter your full name" className="w-full p-2 border rounded-lg" required />
              <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded-lg" required />
              <input type="tel" placeholder="Enter your phone number" className="w-full p-2 border rounded-lg" required />
              <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full p-2 border rounded-lg" required>
                <option value="">Select a city</option>
                {cities.map((cityOption, index) => (
                  <option key={index} value={cityOption}>{cityOption}</option>
                ))}
              </select>
              <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} className="w-full p-2 border rounded-lg" required>
                <option value="">Select a vehicle</option>
                {vehicles.map((vehicleOption, index) => (
                  <option key={index} value={vehicleOption}>{vehicleOption}</option>
                ))}
              </select>
              <select value={source} onChange={(e) => setSource(e.target.value)} className="w-full p-2 border rounded-lg" required>
                <option value="">Select a source</option>
                {sources.map((sourceOption, index) => (
                  <option key={index} value={sourceOption}>{sourceOption}</option>
                ))}
              </select>
            </div>
            <textarea placeholder="Tell us about your business..." className="w-full p-2 border rounded-lg" rows="4" required></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Submit</button>
          </form>
        </div>
      </div>
      <TransportService />
      <PartnerSlider />
      {/* <Testimonials/> */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick pauseOnHover draggable />
    </>
  );
};

export default BecomePartner;
