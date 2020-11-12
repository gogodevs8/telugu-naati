import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Carousel from "./components/Carousel";
import "./App.css";
import Logo from "./assets/finale.png";
import About from "./components/About";
import Choose from "./components/Choose";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="App">
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand href="#home">
          {" "}
          <img width="70%" src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link style={{ fontWeight: "bold" }} href="#home">
              Home
            </Nav.Link>
            <Nav.Link style={{ fontWeight: "bold" }} href="#about">
              About
            </Nav.Link>
            <Nav.Link style={{ fontWeight: "bold" }} href="#choose">
              Why Choose Us
            </Nav.Link>
            <Nav.Link style={{ fontWeight: "bold" }} href="#contact">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <section id="home" style={{ height: "100vh" }}>
        <Carousel />
      </section>

      <section id="about" style={{ paddingTop: "100px" }}>
        <About />
      </section>

      <section id="choose" style={{ paddingTop: "100px" }}>
        <Choose />
      </section>

      <section id="contact" style={{ paddingTop: "110px" }}>
        <Contact />
      </section>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
