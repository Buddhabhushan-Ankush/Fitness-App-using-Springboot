import React from "react";

function Admincolcard({ request }) {
  return (
    <tr>
      <td className="fs-4 pe-5">Member{request.reqid}</td>
      <td className="fs-4 pe-5">{request.name}</td>
      <td className="fs-4 pe-5">{request.email}</td>
      <td className="fs-4 pe-5">{request.gympackage}</td>
      <td className="fs-4 pe-5">{request.fee}</td>
    </tr>
  );
}

export default Admincolcard;
