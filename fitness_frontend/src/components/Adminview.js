import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import Admincolcard from "./Admincolcard";
import swal from "sweetalert2";
import bgimage from "../images/fit3.jpg";

function Adminview() {
  useEffect(() => {
    document.title = "View Collections";
    if (sessionStorage.getItem("admin") != "admin") {
      window.location = "/";
    }
    viewCollection();
  }, []);

  const viewCollection = () => {
    axios.get(`${base_url}/viewcollections`).then(
      (response) => {
        console.log(response);
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
  console.log(requests);
  return (
    <div
      className="min-vh-100"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-fluid pt-5 ">
        <h1 className="text-center text-warning mt-5 pt-5">
          VIEW MEMBERSHIP LIST
        </h1>
        <table
          className="table table-striped table-dark  m-auto mt-5 "
          style={{ width: "90%", backgroundColor: "dark", opacity: 0.75 }}
        >
          <thead>
            <tr className="fs-4">
              <th scope="col">Enquiry ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email ID</th>
              <th scope="col">Package Selected</th>
              <th scope="col">Amount Paid</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((item) => <Admincolcard request={item} />)
            ) : (
              <h2 className="text-center m-5 p-5">No Enquiry cards</h2>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminview;
