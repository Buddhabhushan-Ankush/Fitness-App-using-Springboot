import axios from "axios";
import React, { useState, useEffect } from "react";
import Viewcard from "./Viewcard";
import base_url from "../api/bootapi";
import swal from "sweetalert2";
import bgimage from "../images/login-bg2.jpg";

const View = () => {
  const name = sessionStorage.getItem("username");
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  useEffect(() => {
    document.title = "View Pending enquiries";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
    viewuserRequests(userdata);
  }, []);

  const viewuserRequests = (data) => {
    axios.post(`${base_url}/pendingrequests`, data).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: `Hey ${name}`,
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
  console.log(requests);

  return (
    <div
      className="p-5 mt-5 "
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-center display-3 pt-5 fw-bold ">
        Pending Enquiry Cards
      </h1>
      {requests.length > 0 ? (
        requests.map((item) => <Viewcard request={item} />)
      ) : (
        <h2 className="text-center m-5 p-5">No enquiry cards</h2>
      )}
    </div>
  );
};

export default View;
