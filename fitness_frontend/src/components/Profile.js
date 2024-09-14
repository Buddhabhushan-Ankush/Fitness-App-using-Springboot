import React, { useEffect } from "react";
import "../css/profile.css";
import bgimage from "../images/f3.jpg";
import { Link } from "react-router-dom";

function Profile() {
  const sess = sessionStorage.getItem("userSession");
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  useEffect(() => {
    document.title = "Profile";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container vh-100 w-50">
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-md-10 mt-5 pt-5">
            <div className=" z-depth-3">
              <div
                className="col-sm-12 bg-dark rounded-left"
                style={{
                  backgroundColor: "white",
                  opacity: 0.7,
                }}
              >
                <div className="card-block text-center text-white">
                  <i className="fas fa-id-card fa-7x mt-5 mb-5"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 ">
            <div className=" z-depth-3">
              <div
                className="col-sm-12 bg-white rounded-right pb-3"
                style={{
                  backgroundColor: "white",
                  opacity: 0.7,
                }}
              >
                <h3 className=" p-2 text-center font-weight-bold">
                  <b>PROFILE CARD</b>
                </h3>
                <hr className="badge-primary mt-0 " />
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="font-weight-bold">
                      Full Name : {sess != null ? userdata.name : "name"}
                    </h3>
                  </div>
                </div>
                <hr className="bg-primary" />
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="font-weight-bold">
                      Email ID : {sess != null ? userdata.email : "email"}
                    </h3>
                  </div>
                </div>
                <hr className="bg-primary" />
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="font-weight-bold">
                      City:{sess != null ? userdata.city : "city"}
                    </h3>
                  </div>
                </div>
                <hr className="bg-primary" />
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="font-weight-bold">
                      Phone : {sess != null ? userdata.phone : "phone"}
                    </h3>
                  </div>
                </div>
                <hr className="bg-primary" />
                
          {/* <Link
            to="/payment"
            className="btn btn-primary text-white btn-lg"
          >
           PAYMENT
          </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
