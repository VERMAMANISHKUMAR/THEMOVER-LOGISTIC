import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success('Message sent successfully!');
    };

    return (
        <div>
            <ToastContainer />
            {/* Page Banner Area */}
            <div className="page-banner bg-1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-content">
                                <h2>Contact With Us</h2>
                                <ul>
                                    <p>At TheMover, we are committed to making your moving and parcel delivery experience seamless and hassle-free. Whether you need assistance with local shifting, packing and moving, or reliable parcel services, we are here to help you!!</p>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Page Banner Area */}

            {/* Contact Info */}
            <div className="pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {/* Contact Number */}
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info">
                                <i className="bx bxs-phone"></i>
                                <h4>Contact Number</h4>
                                <p><a href="tel:+919136369036">+91 91363 69036</a></p>
                            </div>
                        </div>

                        {/* Our Location */}
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info">
                                <i className="bx bxs-location-plus"></i>
                                <h4>Our Location</h4>
                                <p>Sector 39, Gurugram, Haryana 122002</p>
                            </div>
                        </div>

                        {/* Contact Email */}
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="contact-info">
                                <i className="bx bxs-envelope"></i>
                                <h4>Contact Email</h4>
                                <p><a href="mailto:support@themover.in">support@themover.in</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Contact Info */}

            {/* Contact Form Area */}
            <div className="contact-form-area pb-100">
                <div className="container">
                    <div className="section-title">
                        <span style={{textAlign:'center'}}>Contact Us</span>
                        <h2 style={{textAlign:'center'}}>Get in Touch</h2>
                        <p style={{textAlign:'center'}}>Have a question? Fill out the form below, and our team will get back to you shortly.</p>
                    </div>

                    <div className="contact-form">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="row">
                                {/* Name Input */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            required
                                            placeholder="Your name"
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="email"
                                            required
                                            placeholder="Your email address"
                                        />
                                    </div>
                                </div>

                                {/* Subject Input */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="msg_subject"
                                            id="msg_subject"
                                            className="form-control"
                                            required
                                            placeholder="Your Subject"
                                        />
                                    </div>
                                </div>

                                {/* Phone Input */}
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="phone_number"
                                            className="form-control"
                                            id="phone_number"
                                            required
                                            placeholder="Your phone number"
                                        />
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            id="message"
                                            className="form-control"
                                            cols="30"
                                            rows="6"
                                            required
                                            placeholder="Write your message..."
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="col-lg-12 col-md-12 text-center">
                                    <button type="submit" className="default-btn-one">
                                        Send Message
                                    </button>
                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* End Contact Form Area */}
        </div>
    );
};

export default ContactUs;
