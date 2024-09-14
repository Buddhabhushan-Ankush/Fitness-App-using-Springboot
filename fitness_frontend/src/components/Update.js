import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";
import base_url from "../api/bootapi";
import bgimage from "../images/login-bg2.jpg";

const Update = () => {
  useEffect(() => {
    document.title = "Update";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";

    } else if (localStorage.getItem("user") == null) { 
      window.location = "/adminusers"; //
    }
    getPrevious();
  }, []);

  let ureqid = sessionStorage.getItem("reqid");

  const getPrevious = () => {
    axios.get(`${base_url}/getrequests/${ureqid}`).then(
      (response) => {
        setUaddress(response.data[0].address);
        setUcity(response.data[0].city);
        setUgympackage(response.data[0].gympackage);
        setUfee(response.data[0].fee);
      },
      (error) => {
        swal.fire("Server is down");
      }
    );
  };

  let uname = sessionStorage.getItem("username");
  let uemail = sessionStorage.getItem("userSession");
  let [uaddress, setUaddress] = useState("");
  let [ucity, setUcity] = useState("");
  let [ugympackage, setUgympackage] = useState("");
  let [ufee, setUfee] = useState("");

  let addressinp = (e) => setUaddress(e.target.value);
  let cityinp = (e) => setUcity(e.target.value);
  let plasticinp = (e) => setUgympackage(e.target.value);
  let ewasteinp = (e) => setUfee(e.target.value);


  const udata = {
    reqid: ureqid,
    name: uname,
    email: uemail,
    address: uaddress,
    city: ucity,
    gympackage: ugympackage,
    fee: ufee,
  };

  const updateRequest = (data) => {
    axios.put(`${base_url}/requests`, data).then(
      (response) => {
        swal
          .fire({
            icon: "Success",
            title: "Update",
            text: "Your request has been updated",
          })
          .then(function () {
            sessionStorage.removeItem("reqid");
            window.location = "/view"; //go to view
          });
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Server is down",
        });
      }
    );
  };

  let [eaddress, setEaddress] = useState("");
  let [ecity, setEcity] = useState("");
  let [egympackage, setEgympackage] = useState("");
  let [efee, setEfee] = useState("");

  const clearFields = () => {
    setUaddress("");
    setUcity("");
    setUgympackage("");
    setUfee("");
  };

  const clearError = () => {
    document.getElementById("address").classList.remove("is-invalid");
    setEaddress("");

    document.getElementById("city").classList.remove("is-invalid");
    setEcity("");

    document.getElementById("gympackage").classList.remove("is-invalid");
    setEgympackage("");

    document.getElementById("fee").classList.remove("is-invalid");
    setEfee("");
  };

  const validate = () => {
    if (uaddress === "" || ucity === "" || ugympackage === "" || ufee === "") {
      swal.fire("All fields are required");
    } else if (
      uaddress.search(/^[/#.0-9a-zA-Z\s,-]+$/) < 0 ||
      uaddress.length < 10
    ) {
      document.getElementById("address").classList.add("is-invalid");
      setEaddress("Enter a valid address");
    } else if (ugympackage.search(/(?=.*[0-9])(?=.*[a-zA-Z]).{6,100}/) < 0) {
      document.getElementById("gympackage").classList.add("is-invalid");
      setEgympackage(
        "Enter description having atleast one digit, one character with minimum length of 6 and maximum of 100"
      );
    } else if (ufee.search(/(?=.*[0-9])(?=.*[a-zA-Z]).{6,100}/) < 0) {
      document.getElementById("fee").classList.add("is-invalid");
      setEfee(
        "Enter description having atleast one digit, one character with minimum length of 6 and maximum of 100"
      );
    } else {
      swal.fire("updated");
      updateRequest(udata);
      clearError();
      clearFields();
    }
  };
  return (
    <div
      className="mt-5 pt-5  min-vh-100 pb-5"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h5 className="text-center text-white display-4 fw-bold mb-3 pt-5 pb-5">
        Update Request
      </h5>
      <form
        className="row g-3 w-50 m-auto bg-dark p-5 fs-5 "
        style={{
          backgroundColor: "white",
          opacity: 0.7,
        }}
      >
        <div className="col-md-12 ">
          <label for="name" className="form-label fs-4 text-white">
            Request Id :
          </label>
          <span className="fs-3 fw-bold text-white">donatereq</span>
          <input
            style={{ border: "0px none" }}
            type="text"
            className=" bg-light fs-3 fw-bold text-black"
            id="reqid"
            name="reqid"
            value={ureqid}
            disabled
          />
        </div>
        <div className="col-md-12 mb-3">
          <label for="name" className="form-label fs-4 text-white">
            Name :
          </label>
          <input
            style={{ border: "0px none" }}
            type="text"
            className=" bg-light fs-3 fw-bold "
            id="name"
            name="name"
            value={uname}
            disabled
          />
        </div>

        <div className="col-md-12 mb-3">
          <label for="email" className="form-label fs-4 text-white">
            Email :
          </label>
          <input
            type="email"
            style={{ border: "0px none" }}
            className="bg-light fs-3 fw-bold "
            id="email"
            name="email"
            value={uemail}
            disabled
          />
        </div>

        <div className="col-12 mb-3">
          <label for="address" className="form-label text-white">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Building no or Bunglow no./Apartment/Locality/Road or Landmark-Zipcode"
            name="address"
            onChange={addressinp}
            onFocus={clearError}
            value={uaddress}
          />
          <div class="invalid-feedback fs-6 fw-bold">{eaddress}</div>
        </div>

        <div className="col-md-6 mb-3">
          <label for="city" className="form-label text-white">
            City
          </label>
          <div className="col-md-6 "></div>
          <select
            id="city"
            className="form-select"
          
            name="city"
            onFocus={clearError}
            onChange={cityinp}
            value={ucity}
          >
            <option selected>Choose City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Navi Mumba">Navi Mumbai</option>
            <option value="Thane">Thane</option>
          </select>
          <div class="invalid-feedback fs-6 fw-bold">{ecity}</div>
        </div>

        <div className="col-md-12 mb-1">
          <label for="gympackage" className="form-label text-white">
            Mention gym package
          </label>
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            id="gympackage"
            name="gympackage"
            placeholder="Eg:-50 plastic bottles,20 kgs of plastic waste etc....."
            onFocus={clearError}
            onChange={plasticinp}
            value={ugympackage}
          />
          <div class="invalid-feedback fs-6 fw-bold">{egympackage}</div>
        </div>

        <div className="col-md-8 mb-1">
          <label for="fee" className="form-label text-white">
            Amount for the selected package
          </label>
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            id="fee"
            name="fee"
            placeholder="Eg:-2 mobiles, 1 Televsion etc......"
            onFocus={clearError}
            onChange={ewasteinp}
            value={ufee}
          />
          <div className="invalid-feedback fs-6 fw-bold">{efee}</div>
        </div>
        <div className="col-md-6 text-center mt-5 mb-5  ">
          <Link to="/view" className="btn btn-primary btn-lg ps-5 pe-5 p-3">
            Back
          </Link>
        </div>
        <div className="col-md-6 text-center mt-5 mb-5  ">
          <input
            type="button"
            className="btn btn-primary btn-lg ps-5 pe-5 p-3"
            value="Update" 
            onClick={validate}
          />
        </div>
      </form>
    </div>
  );
};

export default Update;
