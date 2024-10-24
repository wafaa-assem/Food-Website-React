import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./TopNavbar.css";
import logo from "./../../assets/logo.png";
import { useEffect, useState } from "react";

export default function TopNavbar() {
  const [showShadow, setShowShadow] = useState(false);
  function scrollToSection(id) {
    const section = document.getElementById(id);
    console.log(section);
    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop - 100,
      });
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    });
  }, []);
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`bg-white ${showShadow ? "shadow-sm" : null}`}
    >
      <Container>
        <Navbar.Brand
          onClick={() => {
            scrollToSection("header");
          }}
        >
          <img src={logo} alt="foodera" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => {
                scrollToSection("header");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                scrollToSection("about");
              }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                scrollToSection("explore");
              }}
            >
              Explore Foods
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                scrollToSection("reviews");
              }}
            >
              Reviews
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                scrollToSection("faq");
              }}
            >
              FAQ
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link id="last-nav">1800 789 123</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
