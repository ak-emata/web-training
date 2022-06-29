/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary custom navbar component, using bootstrap components
 */
import React, { Component } from "react";
import "./customNavbar";

import NavbarLogo from "./navbarComponents/navbarLogo";
import LangSelector from "./navbarComponents/langSelector";
import NavItem from "./navbarComponents/navItem";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="white" expand="lg" sticky="top" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="navbarInfo" />
          <NavbarLogo redirectTo="/" />

          <Navbar.Collapse id="navbarInfo" variant="light">
            <Nav fill className="me-auto">
              <NavItem text="Home" redirectTo="/" active={true} />
              <NavItem text="Characters" redirectTo="/" />
              <NavItem text="Islands" redirectTo="/" />
              <NavItem text="Mist Objects" redirectTo="/" />

              <Nav.Link>
                <LangSelector language="English" active={true} />
                <LangSelector language="Spanish" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default CustomNavbar;
