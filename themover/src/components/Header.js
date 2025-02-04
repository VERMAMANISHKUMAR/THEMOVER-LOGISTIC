import React from "react";
import { Link } from "react-router-dom";
import themoverLogo from "../assets/img/themover-logo.png";
import '../assets/css/style.css'
import '../assets/css/responsive.css'
import '../assets/css/dark.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/boxicons.min.css'
import '../assets/css/animate.min.css'
const Header = () => {
  return (
    <header className="header-area">
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 ">
              <ul className="left-info">
                <li>
                  <a href="mailto:support@themover.in" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxs-envelope"></i>
                    support@themover.in
                  </a>
                </li>
                <li>
                  <a href="tel:+919136369036">
                    <i className="bx bxs-phone-call"></i>
                    +91 91363 69036
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-sm-6 ">
              <ul className="right-info">
                <li className="">
                  <Link to="/become-partner">Become A Partner</Link>
                </li>
                <li className="">
                  <a href="https://portal.themover.in/" target="_blank" rel="noopener noreferrer">
                         Login
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Start Navbar Area */}
      <div className="navbar-area">
        <div className="ferry-responsive-nav">
          <div className="container">
            <div className="ferry-responsive-menu">
              <div className="logo">
                <Link to="/">
                  <img src={themoverLogo} className="main-logo" alt="logo" />
                  <img src={themoverLogo} className="white-logo" alt="logo" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="ferry-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" to="/">
                <img src={themoverLogo} className="main-logo" alt="logo" />
                <img src={themoverLogo} className="white-logo" alt="logo" />
              </Link>

              <div className="collapse navbar-collapse mean-menu">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/about-us" className="nav-link">
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/services" className="nav-link">
                      Services
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/contact-us" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
