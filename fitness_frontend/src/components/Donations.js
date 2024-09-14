import axios from "axios";
import React, { useState, useEffect } from "react";
import base_url from "../api/bootapi";
import swal from "sweetalert2";
import Donationcard from "./Donationcard";
import bgimage from "../images/c2.jpg";

const Donations = () => {
  const name = sessionStorage.getItem("username");
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  useEffect(() => {
    document.title = "View Donations";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/"; //go to login page
    }
    viewDonations(userdata);
  }, []);

  const viewDonations = (data) => {
    axios.post(`${base_url}/viewdonations`, data).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: `Hey ${name}`,
            text: "There are no enquiries",
            icon: "error",
            button: "Ok",
          });
        }
        setRequests(response.data);
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
  const [requests, setRequests] = useState([]);

  return (
    <div
      className="p-5 "
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-center text-white display-3 pt-5 mt-5 fw-bold ">
        Membership
      </h1>
      <table
        className="table table-striped table-dark  m-auto mt-5 mb-5"
        style={{
          backgroundColor: "dark",
          opacity: 0.75,
        }}
      >
        <thead>
          <tr className="fs-4">
            <th scope="col">Enquiry ID</th>
            <th scope="col">Package Selected</th>
            <th scope="col">Amount paid</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((item) => <Donationcard request={item} />)
          ) : (
            <h2 className="text-center m-5 p-5">Not a member yet</h2>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Donations;
