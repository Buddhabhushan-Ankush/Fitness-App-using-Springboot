import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";
import mumimg from "../images/Mumbai.jpg";
import puneimg from "../images/pune.png";
import hydimg from "../images/hyderbad.jpg";
import bangimg from "../images/banglore.jpg";
import bgimage from "../images/fit3.jpg";

function Home() {
  useEffect(() => {
    document.title = "Home";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
  }, []);
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right top, #ba538d, #ad5b9c, #9c63a9, #896bb2, #7572b7, #637dc0, #4f87c5, #3a90c7, #21a0cc, #1aafcc, #34bdc8, #55cac2)",
      }}
    >
      <div className="bgimg">
        <div className="container text-center text-white headerset">
          <h2>Bodybuilding is much like any other sport</h2>
          <h1 className="text-warning">To be successful</h1>
          <h3>
            you must dedicate yourself 100% to your training, diet and mental
            approach.
          </h3>
          <br />
          <Link
            to="/aboutus"
            className="btn btn-primary text-white btn-lg mt-5"
          >
            ABOUT US
          </Link>
          <br />
          <Link
            to="/contactus"
            className="btn btn-primary text-white btn-lg mt-5"
          >
            CONTACT US
          </Link>

        </div>
      </div>

      <section className="container ourservices text-center">
        <h1>OUR SERVICES</h1>
        <div className="row rowsetting">
          <div className="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
            <div className="imgsetting d-block m-auto bg-dark">
              <i className="fa fa-dumbbell fa-3x text-white"></i>
            </div>
            <h2>Gym Management</h2>
          </div>

          <div className="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
            <div className="imgsetting d-block m-auto bg-dark">
              <i className="fa fa-dumbbell fa-3x text-white"></i>
            </div>
            <h2>Yoga Management</h2>
          </div>

          <div className="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
            <div className="imgsetting d-block m-auto bg-dark">
              <i className="fa fa-dumbbell fa-3x text-white"></i>
            </div>
            <h2>Meditation</h2>
          </div>
        </div>
      </section>

      <section
        className="portfolio"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container text-center ">
          <h1 className="text-light">LATEST PACKAGES</h1>
          <br />
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img
                  src={blog1}
                  className="card img-fluid"
                  style={{ width: "415.99px", height: "250px" }}
                />
                <div className="card body ">
                  <h2 className="card-title">MONTHLY PACKAGE 01</h2>
                  <p className="card-text text-left">
                    <ul>
                      <li>Personal Trainer</li>
                      <li>Diet Plan</li>
                      <li>Neutrition guidance</li>
                      <li>Yoga Training</li>
                      <li>Meditation classes</li>
                      
                      <li>Cardio Training</li>
                      <li>Muscule Building Guidence</li>
                      <li>
                        <h3 className="text-danger">
                          Membership Fee: Rs.1000/-
                        </h3>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img
                  src={blog2}
                  className="card img-fluid"
                  style={{ width: "415.99px", height: "250px" }}
                />
                <div className="card body">
                  <h2 className="card-title">HALFYEAR PACKAGE 02</h2>
                  <p className="card-text text-left">
                    <ul>
                      <li>Personal Trainer</li>
                      <li>Diet Plan</li>
                      <li>Neutrition guidance</li>
                      <li>Yoga Training</li>
                      <li>Meditation classes</li>
                     
                      <li>Cardio Training</li>
                      <li>Muscule Building Guidence</li>
                      <li>
                        <h3 className="text-danger">
                          Membership Fee: Rs.6000/-
                        </h3>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
              <div className="card">
                <img
                  src={blog3}
                  className="card img-fluid"
                  style={{ width: "415.99px", height: "250px" }}
                />
                <div className="card body " >
                  <h2 className="card-title">YEARLY PACKAGE 03</h2>
                  <p className="card-text text-left">
                    <ul>
                      <li>Personal Trainer</li>
                      <li>Diet Plan</li>
                      <li>Neutrition guidance</li>
                      <li>Yoga Training</li>
                      <li>Meditation classes</li>
                     
                      <li>Cardio Training</li>
                      <li>Muscule Building Guidence</li>
                      <li>
                        <h3 className="text-danger">
                          Membership Fee: Rs.12000/-
                        </h3>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage:
            "linear-gradient(to right top, #ba538d, #ad5b9c, #9c63a9, #896bb2, #7572b7, #637dc0, #4f87c5, #3a90c7, #21a0cc, #1aafcc, #34bdc8, #55cac2)",
        }}
      >
        <div className="text-center p-5">
          <h1 color="blue">We are currently working in these cities</h1>
          <hr className="hrline" />
          <br />
          <br />
          <div className="img1">
            <img src={mumimg} alt="Mumbai image" height="250" width="310" />
            <img src={puneimg} alt="pune" height="250" width="310" />
            <img src={hydimg} alt="hyd" height="250" width="310" />
            <img src={bangimg} alt="banglore" height="250" width="310" />
          </div>
          <div className="fourcities">
            <h3 className="fmumbai">
              Mumbai <br />
              200k+ Members
            </h3>
            <h3 className="fpune">
              Pune
              <br />
              250k+ Members
            </h3>
            <h3 className="fbanglore">
              Delhi
              <br />
              200k+ Members
            </h3>
            <h3 className="fbanglore">
             Punjab
              <br />
              300k+ Members
            </h3>
          </div>
        </div>
      </section>
      <br />
      <br />
    </div>
  );
}

export default Home;
