import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/boxicons.min.css";
import "../assets/css/dark.css";
import "../assets/css/responsive.css";
import "../assets/css/style.css";
import "../assets/css/meanmenu.min.css";
import "../assets/css/magnific-popup.min.css";
import themoverLogo from "../assets/img/themover-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-area pt-100 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="logo">
                  <img src={themoverLogo} className="main-logo" alt="Themover Logo" />
                  <img src={themoverLogo} className="white-logo" alt="The Mover White Logo" />
                </div>
                <p>
                  At TheMover, we are committed to making your moving and parcel delivery experience seamless and hassle-free.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>Company</h3>
                <ul className="footer-text">
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="#">Features</Link></li>
                  <li><Link to="#">Cost Calculator</Link></li>
                  <li><Link to="#">Latest News</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>Support</h3>
                <ul className="footer-text">
                  <li><Link to="#">FAQ’s</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/terms-condition">Terms & Conditions</Link></li>
                  <li><Link to="#">Community</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>Contact Info</h3>
                <ul className="info-list">
                  <li><i className="bx bxs-location-plus"></i> Sector 39, Gurugram, Haryana 122002</li>
                  <li><i className="bx bxs-envelope"></i> <a href="mailto:info@themover.in">info@themover.in</a></li>
                  <li><i className="bx bxs-envelope"></i> <a href="mailto:support@themover.in">support@themover.in</a></li>
                  <li><i className="bx bxs-phone"></i> <a href="tel:+919136369036">+91 91363 69036</a></li>
                </ul>
                
                <ul className="footer-socials">
                  <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="bx bxl-facebook"></i></Link></li>
                  <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="bx bxl-twitter"></i></Link></li>
                  <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="bx bxl-linkedin"></i></Link></li>
                  <li><Link to="#" onClick={(e) => e.preventDefault()}><i className="bx bxl-instagram"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <div className="container">
          <p>
            Copyright 2025. All Rights Reserved 
            <a href="https://themover.in/" target="_blank" rel="noopener noreferrer">Themover</a>
          </p>
        </div>
      </div>
      <div className="go-top">
        <i className="bx bx-chevrons-up"></i>
      </div>
    </>
  );
};

export default Footer;
