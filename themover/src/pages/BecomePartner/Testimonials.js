import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery first
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import Owl Carousel styles
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Import Owl Carousel theme styles
import 'owl.carousel'; // Import the Owl Carousel plugin

const Testimonials = () => {
  useEffect(() => {
    // Initialize the Owl Carousel when the component mounts
    $(document).ready(function () {
      // Ensure owlCarousel is called after the DOM is fully loaded
      $('.testimonials-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        dots: true,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
          "<i class='bx bxs-left-arrow-alt'></i>",
          "<i class='bx bxs-right-arrow-alt'></i>"
        ],
      });
    });
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="testimonials-area ptb-100">
      <div className="container">
        <div className="shape-two">
          <img src="assets/img/shape/shape6.png" className="shape-1" alt="shape" />
          <img src="assets/img/shape/shape3.png" alt="shape" />
        </div>
        <div className="section-title">
          <span>Feedback</span>
          <h2>What Our Clients Said About Us</h2>
        </div>

        <div className="testimonials-slider owl-carousel owl-theme">
          <div className="testimonials-card">
            <div className="client-img">
              <img src="assets/img/clients/client6.jpg" alt="image" />
              <h3>Jhon Smith</h3>
              <span>CEO of LTD company</span>
            </div>

            <div className="rating">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>

            <div className="feedback-text">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.
              </p>
            </div>
          </div>

          <div className="testimonials-card">
            <div className="client-img">
              <img src="assets/img/clients/client5.jpg" alt="image" />
              <h3>William Leo</h3>
              <span>CEO of LTD company</span>
            </div>

            <div className="rating">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>

            <div className="feedback-text">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.
              </p>
            </div>
          </div>

          <div className="testimonials-card">
            <div className="client-img">
              <img src="assets/img/clients/client4.jpg" alt="image" />
              <h3>Benjamin Liam</h3>
              <span>CEO of LTD company</span>
            </div>

            <div className="rating">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>

            <div className="feedback-text">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
