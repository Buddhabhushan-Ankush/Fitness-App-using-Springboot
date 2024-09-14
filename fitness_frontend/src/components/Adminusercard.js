// // import React from "react";
// // import base_url from "../api/bootapi";
// // import swal from "sweetalert2";
// // import axios from "axios";

// // function Adminusercard({ user }) {
  
// //   const deleteUser = () => {
// //     axios.delete(`${base_url}/deleteuser/${user.email}`).then(
// //       (response) => {
// //         //console.log(response);
// //       },
// //       (error) => {
// //         console.log(error);
// //         swal.fire({
// //           icon: "error",
// //           title: "Oh no!",
// //           text: "Server is down",
// //         });
// //       }
// //     );
// //   };



  
// //   const handleDelete = () => {
// //     swal
// //       .fire({
// //         title: "Are you sure you want to delete this Member?",
// //         text: "You won't be able to revert this!",
// //         icon: "warning",
// //         showCancelButton: true,
// //         confirmButtonColor: "#3085d6",
// //         cancelButtonColor: "#d33",
// //         confirmButtonText: "Yes, delete it!",
// //       })
// //       .then((result) => {
// //         if (result.isConfirmed) {
// //           deleteUser();
// //           swal
// //             .fire("Deleted!", "Member has been Deleted", "success")
// //             .then(function () {
// //               window.location = "/adminusers";
// //             });
// //         }
// //       });
// //   };

// //   return (
// //     <tr>
// //       <td>{user.name}</td>
// //       <td>{user.city}</td>
// //       <td>{user.phone}</td>
// //       <td>{user.email}</td>
// //       <td>{user.password}</td>
// //       <td>{user.securityQues}</td>
// //       <td>{user.securityAns}</td>
// //       <td>{user.admin == true ? "Yes" : "No"}</td>
// //       <td>
// //       <button
// //                     type="button"
// //                       class="btn btn-sm btn-danger ps-5 pe-5 p-2  mb-2 badge-pill"
// //                     onClick={handleDelete}
// //                     >
// //                       DELETE
// //                     </button>
        
// //       </td>
// //       <td>
// //       <button
// //           type="button"
// //           className="btn btn-outline-danger btn-sm badge-pill"
// //           onClick={handleDelete}
// //         >
// //           Update
// //         </button>
// //       </td>
// //     </tr>
// //   );
// // }

// // export default Adminusercard;


// import React from "react";
// import base_url from "../api/bootapi";
// import swal from "sweetalert2";
// import axios from "axios";

// function Adminusercard({ user }) {
  
//   const deleteUser = () => {
//     axios.delete(`${base_url}/deleteuser/${user.email}`).then(
//       (response) => {
//         // Handle success
//       },
//       (error) => {
//         console.log(error);
//         swal.fire({
//           icon: "error",
//           title: "Oh no!",
//           text: "Server is down",
//         });
//       }
//     );
//   };

//   const handleDelete = () => {
//     swal
//       .fire({
//         title: "Are you sure you want to delete this Member?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!",
//       })
//       .then((result) => {
//         if (result.isConfirmed) {
//           deleteUser();
//           swal
//             .fire("Deleted!", "Member has been Deleted", "success")
//             .then(function () {
//               window.location = "/adminusers";
//             });
//         }
//       });
//   };



//   const UserUpdate = (data) => {
    
//             window.location = "/updateuser";
//           };
      
  


//   const handleUpdate = () => {
   
   
//             UserUpdate();
        
//             window.location = "/adminusers";
          
//       }
   


//   return (
//     <tr>
//       <td>{user.name}</td>
//       <td>{user.city}</td>
//       <td>{user.phone}</td>
//       <td>{user.email}</td>
//       <td>{user.password}</td>
//       <td>{user.securityQues}</td>
//       <td>{user.securityAns}</td>
//       <td>{user.admin === true ? "Yes" : "No"}</td>
//       <td>
//         <button
//           type="button"
//           className="btn btn-sm btn-danger ps-5 pe-5 p-2  mb-2 badge-pill"
//           onClick={handleDelete}
//         >
//           DELETE
//         </button>
//       </td>
//       <td>
//         <button
//           type="button"
//           className="btn btn-outline-danger btn-sm badge-pill"
//           onClick={handleUpdate}
//         >
//           Update
//         </button>
//       </td>
//     </tr>
//   );
// }

// export default Adminusercard;



import React from "react";
import base_url from "../api/bootapi";
import swal from "sweetalert2";
import axios from "axios";

function Adminusercard({ user }) {
  const deleteUser = () => {
    axios.delete(`${base_url}/deleteuser/${user.email}`).then(
      (response) => {
        // Handle success
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

  const handleDelete = () => {
    swal
      .fire({
        title: "Are you sure you want to delete this Member?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteUser();
          swal
            .fire("Deleted!", "Member has been Deleted", "success")
            .then(function () {
              window.location = "/adminusers";
            });
        }
      });
  };

  const handleUpdate = () => {
    window.location = `/updateuser?email=${user.email}`;
  };

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.city}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>
      <td>{user.securityQues}</td>
      <td>{user.securityAns}</td>
      <td>{user.admin === true ? "Yes" : "No"}</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-danger ps-5 pe-5 p-2  mb-2 badge-pill"
          onClick={handleDelete}
        >
          DELETE
        </button>
      </td>
      {/* <td>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm badge-pill"
          onClick={handleUpdate}
        >
          Update
        </button>
      </td> */}
    </tr>
  );
}

export default Adminusercard;
