/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

import React, { Component } from "react";
import "./navbarLogo";
import logo from "../../images/logo.svg";

import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";

class NavbarLogo extends Component {
  render() {
    return (
      <Navbar.Brand href={this.props.redirectTo} className="mx-auto">
        <Image src={logo} alt="One Piece Logo" />
      </Navbar.Brand>
    );
  }
}

export default NavbarLogo;
