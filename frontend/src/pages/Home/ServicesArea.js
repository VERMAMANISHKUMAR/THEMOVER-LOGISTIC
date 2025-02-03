import React, { useState } from "react";
import Gallery1 from '../../assets/img/gallery/gallery-1.png';
import Gallery2 from '../../assets/img/gallery/gallery-2.png';
import Gallery3 from '../../assets/img/gallery/gallery-3.png';
import Gallery4 from '../../assets/img/gallery/gallery-4.png';
import Gallery5 from '../../assets/img/gallery/gallery-5.png';
import Gallery6 from '../../assets/img/gallery/gallery-12.jpg';
import Gallery7 from '../../assets/img/gallery/gallery-7.png';
import Gallery8 from '../../assets/img/gallery/gallery-8.png';
import Gallery9 from '../../assets/img/gallery/gallery-9.png';
import WorkProces from '../../assets/img/gallery/work-process-web.png';

const ServicesArea = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: Gallery1, alt: 'Gallery Image 1' },
    { id: 2, src: Gallery2, alt: 'Gallery Image 2' },
    { id: 3, src: Gallery3, alt: 'Gallery Image 3' },
    { id: 4, src: Gallery4, alt: 'Gallery Image 4' },
    { id: 5, src: Gallery5, alt: 'Gallery Image 5' },
    { id: 6, src: Gallery6, alt: 'Gallery Image 6' },
    { id: 7, src: Gallery7, alt: 'Gallery Image 7' },
    { id: 8, src: Gallery8, alt: 'Gallery Image 8' },
    { id: 9, src: Gallery9, alt: 'Gallery Image 9' },
  ];

  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Our Services</span>
            <h2>Best Packing and Unpacking Services</h2>
          </div>

          <div className="row">
            {[
              { icon: 'bxs-ship', title: 'OceanXpress', description: 'Reliable and efficient ocean freight solutions to seamlessly transport your goods across international waters, ensuring timely deliveries with utmost safety.' },
              { icon: 'bx-store', title: 'StoreShip', description: 'Your trusted partner for secure cargo storage. With flexible and safe storage solutions, StoreShip keeps your goods protected and ready for transport when you need them.' },
              { icon: 'bxs-truck', title: 'SpeedXpress', description: 'Fast, reliable, and door-to-door courier delivery service. SpeedXpress ensures your packages reach their destination on time.' },
              { icon: 'bx-transfer', title: 'TradeLink', description: 'A seamless B2B exchange platform for businesses to connect and trade efficiently. TradeLink helps you expand your network and manage transactions.' }
            ].map((service, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <div className="service-card">
                  <i className={`bx ${service.icon}`}></i>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="service-details.html" className="default-btn-two">Read More</a>
                </div>
              </div>
            ))}
          </div>

          <div className="view-btn">
            <a href="services.html" className="default-btn">View All</a>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section ptb-100">
        <div className="container">
          <div className="text-center">
            <h2>How We Work</h2>
            <p>Relocate In 4 Easy Steps</p>
            <img src={WorkProces} alt="Work Process" />
          </div>

          <div className="section-title">
            <span>Gallery</span>
            <h2>Our Recent Work</h2>
          </div>

          <div className="row">
            {galleryImages.map((image) => (
              <div key={image.id} className="col-lg-4 col-md-6">
                <div className="gallery-item">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid"
                    onClick={() => setSelectedImage(image.src)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="image-modal">
          <div className="modal-overlay" onClick={() => setSelectedImage(null)}></div>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected Preview" className="img-fluid" />
            <button className="close-btn" onClick={() => setSelectedImage(null)}>✖</button>
          </div>
        </div>
      )}

      {/* CSS for Modal */}
      <style>
        {`
          .image-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.7);
            z-index: 1000;
          }
          .modal-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
          }
          .modal-content {
            position: relative;
            background: white;
            padding: 20px;
            border-radius: 8px;
            max-width: 80%;
            max-height: 80%;
            text-align: center;
          }
          .modal-content img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
          }
          .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: red;
            color: white;
            border: none;
            font-size: 18px;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 50%;
          }
        `}
      </style>
    </>
  );
};

export default ServicesArea;
