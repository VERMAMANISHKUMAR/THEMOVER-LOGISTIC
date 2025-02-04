import React from "react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Services from "./pages/Service";
import Support from "./MainHeaderPages/Support";
import Estimate from "./MainHeaderPages/Estimate";
import Megalmage from "./MainHeaderPages/MegaImage";
import Porter from "./MainHeaderPages/Porter";
import BecomePartner from "./pages/BecomePartner/BecomePartner"

const App = () => {
  return (
    <>
      {/* <div class="preloader">
      <div class="d-table">
          <div class="d-table-cell">
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
          </div>
      </div>
    </div> */}
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/estimate" element={<Estimate/>} />
          <Route path="/megalmage" element={<Megalmage/>} />
          <Route path="/porter" element={<Porter/>} />
          <Route path="/become-partner" element={<BecomePartner/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  );
};

export default App;
