//import "../css/payment.css";
import qr from "../images/qrcode.png";

import { Card, Col, Container, Image, Row } from "react-bootstrap";

const Payment = () => {
  return (
    <Container>
      <Row>
        <Col>
          <br />
          <h3>Get in touch</h3>
          <hr />
          <br />
          <form className="contactUsForm">
            <label className="">Card Number : </label>
            <input type="text" name="cname" />
            <br />
            <br />
            <label>Holder Name : </label>
            <input type="text" name="hname" />
            <br />
            <br />
            <label>CCV : </label>
            <input type="text" name="ccv" />
            <br />
            <br />
            <select name="month" id="month-select" class="form-select me-4 p-1 m-1">
              <option value="Month" selected disabled>
                Month
              </option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <select name="year" id="year-select" class="form-select me-4 p-1 m-1">
              <option value="Year" selected disabled>
                Year
              </option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
            <br />
            <br />
            <input type="submit" value="Pay" />
          </form>
          <br />
        </Col>
        <Col>
          <br />
         
          <hr />
          <br />
          
          <Card className="container mt-3 pt-3 min-vh-100 mt-5">
            <Card.Header>
             SCAN QR TO PAY
            </Card.Header>
            <Card.Body>
              <Card.Text>
                
                <hr />
                
              
                <br />
                <br />
                <img class="m-5 mt-2"
                  src={qr}
                  width="250"
                  height="250"
                 
                  
                 
                ></img>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );

  {
    /* </div>
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <h3>Get in touch</h3>
            <hr />
            <br />
            <form className="paymentfrom">
              <label className="">Card Number : </label>
              <input type="text" name="cno" />
              <br />
              <br />
              <label>Holder Name: </label>
              <input type="text" name="hname" />
              <br />
              <br />
              <label for="month" class="form-label">
                Expiration Date
              </label>
              <div class="d-flex">
                <select name="month" id="month-select" class="form-select me-2">
                  <option value="Month" selected disabled>
                    Month
                  </option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <select name="year" id="year-select" class="form-select">
                  <option value="Year" selected disabled>
                    Year
                  </option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </div>
              <div>
                <label for="card-cvv" class="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  id="card-cvv"
                  name="card-cvv"
                  class="form-control"
                  required
                />
              </div>
              <br />
              <input type="submit" value="Pay" />
            </form>
            <br />
          </Col>
          <Col>
            <Card>
              <Card.Header>
                SCAN QR CODE TO PAY
              </Card.Header>
              <Card.Body>
                <Image src={qr}></Image>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );

    
}; */
  }
};
export default Payment;
