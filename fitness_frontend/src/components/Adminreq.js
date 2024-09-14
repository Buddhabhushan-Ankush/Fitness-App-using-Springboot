import React, { useEffect, useState } from "react";
import Admincard from "./Admincard";
import base_url from "../api/bootapi";
import swal from "sweetalert2";
import axios from "axios";
import bgimage from "../images/login-bg2.jpg";

function Adminreq() {
  useEffect(() => {
    document.title = "View Requests";
    if (sessionStorage.getItem("admin") != "admin") {
      window.location = "/";
    }
    viewAllRequests();
  }, []);

  const viewAllRequests = () => {
    axios.get(`${base_url}/viewallpendingrequests`).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: "Admin",
            text: "There are no requests",
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
      className="pt-5"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" vh-100">
        <h1 className="mt-5 pt-5 text-center text-warning fw-bold">
          View Pending Enquiries
        </h1>
        <table
          className="table table-striped table-secondary mt-5 p-5 m-auto"
          style={{ width: "90%", backgroundColor: "white", opacity: 0.75 }}
        >
          <thead>
            <tr className="fs-4">
              <th scope="col">Enquiry ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">Gym Package</th>
              <th scope="col">Amount</th>
              <th scope="col">Collect</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((item) => <Admincard request={item} />)
            ) : (
              <h2 className="text-center m-5 p-5">No enquiry cards</h2>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminreq;
