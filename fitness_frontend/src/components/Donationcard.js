import React from "react";

const Donationcard = ({ request }) => {
  return (
    <tr>
      <td className="fs-4">Enquiry{request.reqid}</td>
      <td className="fs-4">{request.gympackage}</td>
      <td className="fs-4">{request.fee}</td>
      <td className="fs-6">{request.address}</td>
    </tr>
  );
};

export default Donationcard;
