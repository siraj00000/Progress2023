import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import MenuIcon from "@mui/icons-material/Menu";
import Cookies from "universal-cookie";
import { useLocation, useNavigate } from "react-router-dom";
// Css
import "./userPanelStyle.css";
const AppNavbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const endutoken = localStorage.getItem("endutoken");
  const cookies = new Cookies();

  const enLogoutHandler = () => {
    cookies.remove("user", { path: "/" });
    localStorage.removeItem("endutoken");
    document.location = "/";
  };
  
  const navigateToLoginPage = () => {
    navigate("/user/login", { state: pathname });
  };
  const navigateToSignUpPage = () => {
    navigate("/user/sign-up", { state: pathname });
  };
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/" className="-logo-container">
          <img src={require("../../assets/userpanel/brand.png")} alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <MenuIcon />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="-nav-menu">
            <NavDropdown title="Features" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Pricing</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
          </Nav>
          <Nav>
            {!endutoken ? (
              <>
                <button
                  className="-signIn-button"
                  onClick={navigateToLoginPage}
                >
                  log In
                </button>
                <button
                  className="-signUp-button"
                  onClick={navigateToSignUpPage}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <Nav.Link eventKey={2} onClick={enLogoutHandler}>
                <button className="-signUp-button">Log Out</button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
