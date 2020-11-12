import React from "react";
import { Carousel, Row, Col, Button } from "react-bootstrap";
import "./Carousel.css";


function Carousell() {
  const items = [
    {
      src:
        "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
      course: "Crash Course",
      desc:
        "Crash Course -  4 Classes @ $149.00",
      button: "Register Now",
    },
    {
      src:
        "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
      course: "Short Term Course",
      desc:
        " Short Term Course - 8 Classes @ $249.00",
      button: "Register Now",
    },
    {
      src:
        "https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
      course: "Intensive Course",
      desc:
        "Intensive Course - 12 Classes @ $449.00 ",
      button: "Register Now",
    },
  ];

  return (
    <div>
      <Carousel>
        {items
          ? items.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={item.src}
                  style={{ height: "100vh" }}
                  alt="First slide"
                />
                <div data-aos="fade-left" className="overlay">
                  <Row>
                    <Col xs={10} md={10} lg={12}>
                      <Row>
                        <Col xs={8} md={3} lg={4}>
                          <p
                            style={{
                              textAlign: "center",
                              backgroundColor: "#EAB75F",
                              borderRadius: "20px",
                            }}
                          >
                            {item.course}
                          </p>
                        </Col>
                      </Row>
                      <h1 className="caption">{item.desc}</h1>
                      <Row style={{ marginTop: "15px" }}>
                        <Col xs={8} md={4} lg={4}>
                          <Button
                            block
                            style={{
                              backgroundColor: "#27B391",
                              borderRadius: "20px",
                              borderColor: "#27B391",
                            }}
                            href="#contact"
                          >
                            {item.button}
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Carousel.Item>
            ))
          : ""}
      </Carousel>
    </div>
  );
}

export default Carousell;
