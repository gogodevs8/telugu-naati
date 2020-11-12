import React, { useState } from "react";
import { Col, Row, Container, Card, Form, Button } from "react-bootstrap";
import Axios from "axios";
import Paypal from "./Paypal";
import Pay from "./Pay";

function Contact() {

const [checkout , setCheckout] = useState(true)

  const paymentHandler = async (e) => {
    const API_URL = "http://localhost:8000/";
    e.preventDefault();
    const amount = document.getElementById("pay").value;
    const orderUrl = `${API_URL}order/${amount}`;
    const response = await Axios.get(orderUrl);
    const { data } = response;
    console.log(amount);
    if (amount == 149 || amount == 249 || amount == 449) {
      const options = {
        key: "rzp_test_UaDS2uihjYJINF",
        name: "Telugu Naati CCL",
        description: "Some Description",
        order_id: data.id,
        handler: async (response) => {
          try {
            const paymentId = response.razorpay_payment_id;
            const url = `${API_URL}capture/${paymentId}`;
            const captureResponse = await Axios.post(url, {});
            console.log(captureResponse.data);
          } catch (err) {
            console.log(err);
          }
        },
        theme: {
          color: "#27B391",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      alert("Some error occured");
    }
  };

  return (
    <div>
      <Container>
        <Card
          data-aos="fade-up"
          style={{
            borderRadius: "20px",
          }}
          className="shadow"
        >
          <Row>
            <Col xs={12} md={12} lg={6}>
              <img
                id="target"
                className="image"
                src="https://image.freepik.com/free-vector/call-center_23-2148177342.jpg"
                // src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"
                style={{ height: "100%", width: "100%" }}
              />
            </Col>
            <Col xs={12} md={12} lg={6}>
              <h1
                style={{
                  fontWeight: "bold",
                  color: "#27B391",
                  textAlign: "center",
                }}
              >
                Register
              </h1>
              <p style={{ textAlign: "center" }}>FILL YOUR DETAILS BELOW</p>
              <Row style={{ padding: "20px" }}>
                <Col xs={10} md={10} lg={11}>
                  <Form>
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        name="name"
                        type="text"
                        placeholder="Enter Your Name"
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Address"
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Your Phone Number"
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Email ID</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Your Email"
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Choose Your Course</Form.Label>
                      <Form.Control as="select" id="pay">
                        <option value="149">Crash Course - $149.00</option>
                        <option value="249">Short Term Course - $249.00</option>
                        <option value="449">Intensive Course - $449.00</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Emergency Contact Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Emergency Contact Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Address"
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Emergency Contact Phone Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Your Phone Number"
                      />
                    </Form.Group>

                    {/* <Form.Group>
                      <Form.Label>Enquiry</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group> */}

                    <Button
                      onClick={paymentHandler}
                      variant="primary"
                      type="submit"
                    >
                      Pay & Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>

      {/* {checkout === true ? (
        <div className="payment-div">
          <Paypal total={500}/>
        </div>
      ) : (
        <div>
          <h1>React-PayPal</h1>
          <button
            onClick={() => {
              setCheckout(true);
            }}
            className="checkout-button"
          >
            Checkout
          </button>
        </div>
      )} */}
    </div>
  );
}

export default Contact;
