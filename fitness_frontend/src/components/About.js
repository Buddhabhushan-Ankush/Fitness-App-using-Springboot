import React from "react";
import "../css/home.css";
import img from "../images/blog2.jpg";
import bgimage from "../images/bg-12.jpg";

function About() {
  return (
    <div
      className="min-vh-100 pt-5 text-white"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <h1 className="mt-5 pt-5 text-center  display-2 fw-bold">GYMPRO</h1>
      <div className="container-fluid p-5 ">
        <div className="row m-auto">
          <div className="col-lg-8 text-white">
            <h1>
              <b>ABOUT US</b>
            </h1>
            <br />
            <h1>
              <strong>OUR MISSION</strong>
            </h1>
            <h4>
              <p>
                The Fitness, Wellness and Recreation Program at Westminster
                College is dedicated to making a positive difference in the
                health and well-being of our community of learners. In alignment
                with the College’s Diversity and Inclusion Values the Fitness,
                Wellness, and Recreation Department strives to provide
                programming to the campus community and is committed to
                providing programming that is inclusive of individual
                differences. With a myriad of options in fitness, wellness,
                outdoor recreation, and intramural and club sport programming,
                we provide experiential opportunities for individuals to
                participate in regular physical activity, discover our unique
                ecological playground, and pursue an enhanced quality of life.
                Our inclusive college-wide learning environment supports
                students, faculty, staff and alumni as they develop
                self-regulation strategies to live a healthy and balanced
                lifestyle.
              </p>
            </h4>
            <br />
          </div>
          <div className="col-lg-4 mt-5">
            <img
              src={img}
              class="card img-fluid"
              style={{ width: "415.99px", height: "250px" }}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="font text-center">
              <i className="fas fa-recycle fa-9x " />
            </div>
            <br />
            <div className=" text-center m-auto">
              <div className="row ">
                <h2>
                  <i className=" fas fa-circle "> No Pain</i>
                  <i className=" fas fa-circle "> No Gain </i>
                  <i className=" fas fa-circle "> So Love Pain</i>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-white">
            <h1>
              <strong>OUR VISION</strong>
            </h1>
            <br />
            <h4>
              <p>The Fitness, Wellness and Recreation</p>
            </h4>
            <h4>
              <p>
                The Fitness, Wellness and Recreation Program at Westminster
                College will provide opportunities for the entire campus
                community to live a healthy and balanced lifestyle. Through
                leadership, collaboration and teamwork we will develop a fun and
                supportive environment filled with a wealth of options through
                which students, faculty, staff and alumni can empower their mind
                and spirit while nurturing their physical self. The Fitness,
                Wellness and Recreation Program, and its staff, will inspire our
                community of learners to make a commitment to health and
                well-being through personalized attention and services designed
                to foster participation in regular physical activity, connection
                to the local ecology, and continuous personal growth and
                enlightenment.
              </p>
            </h4>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
