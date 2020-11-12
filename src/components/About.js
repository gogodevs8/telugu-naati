import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <Row
              style={{ marginTop: "50px" }}
              className="justify-content-center"
            >
              <Col data-aos="fade-up" xs={12} lg={12}>
                <h1
                  style={{
                    textAlign: "center",
                    fontFamily: "acumin-pro",
                  }}
                  className="aboutus"
                >
                  About Us
                </h1>
                <p
                  style={{
                    textAlign: "center",
                  }}
                >
                  edX is the trusted platform for education and learning.
                  Founded by Harvard and MIT, edX is home to more than 20
                  million learners, the majority of top-ranked universities in
                  the world and industry-leading companies. As a global
                  nonprofit, edX is transforming traditional education, removing
                  the barriers of cost, location and access. Fulfilling the
                  demand for people to learn on their own terms, edX is
                  reimagining the possibilities of education, providing the
                  highest-quality, stackable learning experiences including the
                  groundbreaking MicroMasters® programs. Supporting learners at
                  every stage, whether entering the job market, changing fields,
                  seeking a promotion or exploring new interests, edX delivers
                  courses for curious minds on topics ranging from data and
                  computer science to leadership and communications. edX is
                  where you go to learn.
                </p>
              </Col>
            </Row>
          </Col>
          <Col data-aos="fade-up" xs={12} md={12} lg={6}>
            <Row className="justify-content-end">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
                style={{ borderRadius: "30px", width: "100%" }}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
