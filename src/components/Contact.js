import React, { useState,useEffect} from "react";
import { Col, Row, Container, Card, Form, Button } from "react-bootstrap";

function Contact() {
  const [load,setLoaded]= useState(false);
  const [price , setPrice] = useState(149);
  useEffect(()=>{
    const script = document.createElement("script");
    script.src =
      "https://www.paypalobjects.com/api/checkout.js";
    script.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(script);
  })

  const paymentHandler=()=>{
      console.log(price);
      document.getElementById('paypal-button').innerHTML='';
      window.paypal.Button.render({
          // Configure environment
          env: 'sandbox',
          client: {
          sandbox: 'demo_sandbox_client_id',
          production: 'demo_production_client_id'
          },
          // Customize button (optional)
          locale: 'en_US',
          style: {
            size: 'large',
            color: 'gold',
            shape: 'pill',
          },
          // Enable Pay Now checkout flow (optional)
          commit: true,

          // Set up a payment
          payment: function(data, actions) {
          return actions.payment.create({
              transactions: [{
              amount: {
                  total:price,
                  currency: 'AUD'
              }
              }]
          });
          },
          // Execute the payment
          onAuthorize: function(data, actions) {
          return actions.payment.execute().then(function() {
              // Show a confirmation message to the buyer
              window.alert('Thank you for your purchase!');
              //add function for email or etc
          });
          }
      }, '#paypal-button');
    }

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
                alt=""
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
                      <Form.Control as="select" id="pay" onBlur={()=>setPrice(document.getElementById('pay').value)}>
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
                      style={{ marginBottom: "20px" }}
                    >
                      Pay & Submit
                    </Button>
                    <div id="paypal-button"></div>
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
