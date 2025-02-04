import React from 'react';
import Shipping1 from '../assets/img/speciality/gallery-15.jpeg'
import Shipping2 from '../assets/img/speciality/gallery-13.jpeg'

const AboutUs = () => {
  return (
    <>
      {/* Page banner Area */}
      <div className="page-banner bg-1">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-content">
                <h2>About Us</h2>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page banner Area */}

      {/* About Safe Area */}
      <div className="about-text-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-safe-text">
                <h2>Safe, Faster And Easy Solution For Shipping</h2>
                <p>At <strong>TheMover</strong>, we specialize in making moving and logistics simpler and stress-free for individuals and businesses across India. With years of experience, we have built a reputation for trust, reliability, and efficiency in the industry.</p>
                <p>Our services range from <strong>local shifting</strong> to <strong>comprehensive packing and moving</strong>, as well as a dependable <strong>parcel service</strong> that ensures your packages are delivered on time, every time.</p>
                <p>Whether it’s local moves, packers and movers services, or parcel deliveries, TheMover continues to set the benchmark for digital shipping excellence. Trust us to deliver your packages on time, every time – because we’ve been doing it right since 1998!</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="safe-image">
                <img src={Shipping1}alt="Shipping" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Safe Area */}

      {/* About Info */}
      <div className="about-info-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="about-info-card">
                <h3>Our Mission</h3>
                <p>At <strong>TheMover</strong>, our mission is to revolutionize the moving and logistics industry in India by delivering reliable, efficient, and affordable services. We aim to simplify the relocation and parcel delivery process with innovative solutions, ensuring a stress-free experience for our customers. We are committed to handling every move and package with the utmost care, professionalism, and integrity, building long-term trust and relationships with our clients.</p>
                <p>Our vision is to become India’s most trusted and preferred brand in the moving and logistics sector. We aspire to lead the industry by consistently setting new benchmarks for quality, efficiency, and customer satisfaction. Through the integration of advanced technologies and sustainable practices, we aim to redefine logistics solutions and contribute to a seamless, connected future.</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 offset-md-3 offset-lg-0">
              <div className="about-info-card">
                <h3>Why Choose TheMover?</h3>
                <p>From the moment you book with us to the final delivery, we ensure a seamless and hassle-free experience. Let TheMover be your trusted partner in moving forward.</p>
                <ul>
                  <li><i className='bx bx-check'></i> <strong>Expert Team:</strong> Our experienced professionals handle your belongings with care.</li>
                  <li><i className='bx bx-check'></i> <strong>Nationwide Reach:</strong> We serve across major cities and towns in India.</li>
                  <li><i className='bx bx-check'></i> <strong>Affordable Rates:</strong> High-quality services at competitive prices.</li>
                  <li><i className='bx bx-check'></i> <strong>Customer First:</strong> We prioritize your convenience and satisfaction.</li>
                  <li><i className='bx bx-check'></i> <strong>Timely Deliveries:</strong> We understand the value of time and ensure your items are delivered promptly.</li>
                  <li><i className='bx bx-check'></i> <strong>Eco-Friendly Practices:</strong> We strive to minimize our environmental impact with sustainable packing materials and practices.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Info */}

      {/* Digital Area */}
      <div className="digital-area ptb-100">
        <div className="container">
          <div className="digital-top-contant">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="digital-image">
                  <img src={Shipping2} alt="Digital Shipping" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="digital-text">
                  <h2>Trusted Digital Shipping From <span>1998</span></h2>
                  <p>At TheMover, we’ve been at the forefront of reliable and innovative shipping solutions since 1998. With over two decades of experience, we’ve evolved into a trusted name for seamless digital shipping services across India.</p>
                  <p>From the very beginning, our mission has been to simplify the logistics process while maintaining the highest standards of efficiency, reliability, and customer satisfaction. Over the years, we have embraced cutting-edge technology to bring you fast, secure, and transparent shipping services, making your logistics experience better than ever.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="digital-card-contant">
            <div className="row">
              <div className="col-lg-6">
                <div className="digital-card">
                  <div className="card-text">
                    <i className='bx bx-cart-alt'></i>
                    <h3><span>1998</span> - Company Started</h3>
                    <p><strong>Legacy of Trust:</strong> 25+ years of excellence in shipping and logistics.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="digital-card">
                  <div className="card-text">
                    <i className='bx bx-map-alt'></i>
                    <h3><span>2008</span> - Office Worldwide</h3>
                    <p><strong>Nationwide Reach:</strong> Serving customers across India with speed and reliability.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="digital-card">
                  <div className="card-text">
                    <i className='bx bxs-truck'></i>
                    <h3><span>2004</span> - Vehicles Adding</h3>
                    <p><strong>Advanced Digital Solutions:</strong> Real-time tracking, easy online booking, and seamless digital operations.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="digital-card">
                  <div className="card-text">
                    <i className='bx bx-award'></i>
                    <h3><span>2012</span> - Award Of The Year Won</h3>
                    <p><strong>Customer-Centric Approach:</strong> Your satisfaction is our top priority, and we’re committed to meeting your logistics needs with care and precision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Digital Area */}

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
                <div className="newsletter-form">
                  <form>
                    <input type="email" className="form-control" placeholder="Email Address" required autoComplete="off" />
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                    <div id="validator-newsletter" className="form-result"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Newsletter Area */}
    </>
  );
};

export default AboutUs;
