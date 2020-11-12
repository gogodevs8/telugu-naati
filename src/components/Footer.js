import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Logo from "../assets/finale.png";

function Footer() {
  return (
    <footer >
      <Container fluid>
        <Card style={{ width: "100%" }}>
          <Row className="justify-content-between">
            <Col xs={12} lg={6}>
              <img className="footimg" src={Logo} />
            </Col>
            <Col xs={12} lg={4}>
              <Row
                style={{ marginTop: "24px" }}
                className="justify-content-center"
              >
                © 2020 Crafted by &nbsp;{" "}
                <span>
                  <a style={{ color: "#27B391" }} href="https://www.texerd.com/">
                    TEXERD
                  </a>{" "}
                  &nbsp;{" "}
                </span>{" "}
                All Rights Reserved.
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
    </footer>
  );
}

export default Footer;
