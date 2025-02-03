import React from "react";
// import Shape2 from "../../assets/img/shape/shape2.png";
// import Shape5 from "../../assets/img/shape/shape5.png";
import { Link } from "react-router-dom";


const ChooseArea = () => {
  return (
    <>
      <div className="choose-area ptb-100">
        <div className="shape-one">
          <img src="assets/img/shape/shape5.png" alt="Shape" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="choose-contant">
                <div className="choose-card">
                  <i class="bx bx-world"></i>
                  <h3>Worldwide Service</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt magna aliqu.
                  </p>
                </div>
              </div>

              <div className="choose-contant">
                <div className="choose-card">
                  <i class="bx bxs-paper-plane"></i>
                  <h3>Tracking Service</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt magna aliqu.
                  </p>
                </div>
              </div>

              <div className="choose-contant">
                <div className="choose-card">
                  <i class="bx bxs-truck"></i>
                  <h3>Fast and Reliable</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt magna aliqu.
                  </p>
                </div>
              </div>

              <div className="choose-contant">
                <div className="choose-card">
                  <i class="bx bx-support"></i>
                  <h3>24/7 Support</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt magna aliqu.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="choose-text">
                <div className="section-title">
                  <span>Why Choose Us</span>
                  <h2>Safe and Faster Logistic Service Neer You</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
                  <Link to="#" className="default-btn-one">Contact Us</Link>
              
                
                <div className="shape-image">
                  <img src="assets/img/shape/shape2.png" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseArea;
