import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                GymPro
              </h5>
              <p>
                Getting to the gym and prioritizing your fitness isn’t easy—we
                know! But staying on track and working toward your health goals
                is essential. So for those days when you need some extra
                motivation, we are there to help you in
                Mumbai,Hyderabad,Parbhani,Amravati,Pune and Banglore
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                SERVICES
              </h5>
              <p>
                <a href="#" className="text-white">
                  GYM MANAGEMENT
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                YOGA MANAGEMENT
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Useful links
              </h5>
              <p>
                <Link to="/home" className="text-white">
                  HOME
                </Link>
              </p>
              <p>
                <Link to="/donate" className="text-white">
                  MEMBERSHIP 
                </Link>
              </p>
              <p>
                <Link to="/view" className="text-white">
                  VIEW MEMBERS
                </Link>
              </p>
              <p>
                <Link to="/profile" className="text-white">
                  PROFILE
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i className="fa fa-envelope mr-3"></i>Gympro@gmail.com
              </p>
              <p>
                <i className="fa fa-home mr-3"></i>At Kharghar(KH)
              </p>
             
              <p>
                <i className="fa fa-phone mr-3"></i>+91 9921975488
              </p>
              <p>
                <i className="fa fa-phone mr-3"></i>+91 9568253614
              </p>
            </div>
          </div>

          <hr className="mb-4" />

          <div className="row align-items-center">
            <div className="col-md-7 col-lg-12 m-auto">
              <p>
                Copyright ©2024 All rights reserved by 
                <a href="#">
                  <strong className="text-warning"> GymPro-Fitness Team 21  </strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
