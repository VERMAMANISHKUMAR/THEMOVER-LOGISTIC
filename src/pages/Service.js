import React from "react";
import { Link } from 'react-router-dom';
import ServiceImg1 from '../assets/img/services/gallery-5.png'
import ServiceImg2 from '../assets/img/services/gallery-6.png'
import ServiceImg3 from '../assets/img/services/gallery-9.png'
import ServiceImg7 from '../assets/img/services/gallery-10.jpg'
const ServicesPage = () => {
    return (
        <>
            {/* Page Banner Area */}
            <div className="page-banner bg-2">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-content">
                                <h2>Our Services</h2>
                                <ul>
                                    <p>Experience the convenience and reliability of TheMover for all your relocation and parcel needs.</p>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Page Banner Area */}

            {/* Our Services Area */}
            <div className="our-services-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Our Services</span>
                        <h2>Delivering Safety, Speed, and Reliability Your Trusted Logistics Partner.</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-two">
                                <img src={ServiceImg1} alt="Local Shifting" />
                                <div className="service-caption">
                                    <h3>Local Shifting</h3>
                                    <p>Moving to a new home in your city? Our local shifting services are tailored to make your relocation stress-free and quick. Our trained team ensures your belongings are packed, transported, and unpacked with utmost care.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-two">
                                <img src={ServiceImg2} alt="Packers and Movers" />
                                <div className="service-caption">
                                    <h3>Packers and Movers</h3>
                                    <p>Relocating to a new city? Our comprehensive packing and moving services provide end-to-end solutions. From packing your items securely to transporting and unpacking them at your destination, we handle it all.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-card-two">
                                <img src={ServiceImg3} alt="Parcel Services" />
                                <div className="service-caption">
                                    <h3>Parcel Services</h3>
                                    <p>Need to send packages across India? Our reliable and timely parcel services ensure your documents, gifts, or goods reach their destination safely. With tracking options and fast delivery, we've got you covered.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* End Our Services Area */}

            {/* Best Logistic Area */}
            <div className="best-logistic-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="logistic-text">
                                <h2>Best <span>Logistic Service</span> Solution Near you</h2>
                                <p>At TheMover, we’ve been at the forefront of reliable and innovative shipping solutions since 1998. With over two decades of experience, we’ve evolved into a trusted name for seamless digital shipping services across India.</p>
                                <p>From the very beginning, our mission has been to simplify the logistics process while maintaining the highest standards of efficiency, reliability, and customer satisfaction. Over the years, we have embraced cutting-edge technology to bring you fast, secure, and transparent shipping services, making your logistics experience better than ever.</p>
                            </div>
                            <li className="default-btn-one"><Link to="/about-us">Read More</Link></li>
                        </div>

                        <div className="col-lg-6">
                            <div className="logistic-image">
                                <img src={ServiceImg7} alt="Best Logistic Service" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Best Logistic Area */}

            {/* Newsletter Area */}
            <div className="newsletter-area">
                <div className="container">
                    <div className="newsletter-content">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="newsletter-title">
                                    <h3>Subscribe to our newsletter:</h3>
                                    <p>Focused on the transport and logistic industry</p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <form className="newsletter-form" data-bs-toggle="validator">
                                    <input type="email" className="form-control" placeholder="Enter your email" name="EMAIL" required autoComplete="off" />
                                    <button type="submit" className="btn btn-primary">Subscribe</button>

                                    <div id="validator-newsletter" className="form-result"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Newsletter Area */}
        </>
    );
};

export default ServicesPage;
