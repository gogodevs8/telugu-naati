import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Choose() {
  return (
    <div>
      <Container>
        <h1
          className="chooseus"
          style={{ textAlign: "center", fontFamily: "acumin-pro" }}
        >
          Why Choose Us
        </h1>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <img
              data-aos="zoom-in"
              width="100%"
              src="https://image.freepik.com/free-vector/education-design-illustration_7087-1046.jpg"
            />
          </Col>
          <Col
            data-aos="zoom-in"
            style={{ display: "flex", alignItems: "center" }}
            xs={12}
            md={12}
            lg={6}
          >
            <Row style={{ padding: "20px" }}>
              <h1
                style={{
                  color: "#27B391",
                  fontWeight: "bold",
                }}
              >
                EXPERT TEACHERS
              </h1>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.that is lorem ispsu dndomkdLorem Ipsum is simply dummy
                text of the printing and typesetting industry.that is lorem
                ispsu dndomkdLorem Ipsum is simply dummy text of the printing
                and typesetting industry.that is lorem ispsu dndomkdLorem Ipsum
                is simply dummy text of the printing and typesetting
                industry.that is lorem ispsu dndomkdLorem Ipsum is simply dummy
                text of the printing and typesetting industry.that is lorem
                ispsu dndomkd
              </p>
            </Row>
          </Col>
        </Row>
        <Row className="rev">
          <Col
            data-aos="zoom-in"
            style={{ display: "flex", alignItems: "center" }}
            xs={12}
            md={12}
            lg={6}
          >
            <Row style={{ padding: "20px" }}>
              <h1
                style={{
                  color: "#27B391",
                  fontWeight: "bold",
                }}
              >
                DEDICATED ATTENTION
              </h1>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.that is lorem ispsu dndomkdLorem Ipsum is simply dummy
                text of the printing and typesetting industry.that is lorem
                ispsu dndomkdLorem Ipsum is simply dummy text of the printing
                and typesetting industry.that is lorem ispsu dndomkdLorem Ipsum
                is simply dummy text of the printing and typesetting
                industry.that is lorem ispsu dndomkdLorem Ipsum is simply dummy
                text of the printing and typesetting industry.that is lorem
                ispsu dndomkd
              </p>
            </Row>
          </Col>
          <Col data-aos="zoom-in" xs={12} md={12} lg={6}>
            <img
              width="100%"
              src="https://image.freepik.com/free-vector/education-design-illustration_7087-1046.jpg"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <img
             data-aos="zoom-in"
              width="100%"
              src="https://image.freepik.com/free-vector/education-design-illustration_7087-1046.jpg"
            />
          </Col>
          <Col
            data-aos="zoom-in"
            style={{ display: "flex", alignItems: "center" }}
            xs={12}
            md={12}
            lg={6}
          >
            <Row style={{ padding: "20px" }}>
              <h1
                style={{
                  color: "#27B391",
                  fontWeight: "bold",
                }}
              >
                FLEXIBLE AND CONVENIENT
              </h1>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.that is lorem ispsu dndomkdLorem Ipsum is simply dummy
                text of the printing and typesetting industry.that is lorem
                ispsu dndomkdLorem Ipsum is simply dummy text of the printing
                and typesetting industry.that is lorem ispsu dndomkdLorem Ipsum
                is simply dummy text of the printing and typesetting
                industry.that is lorem ispsu dndomkdLorem Ipsum is simply dummy
                text of the printing and typesetting industry.that is lorem
                ispsu dndomkd
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Choose;
