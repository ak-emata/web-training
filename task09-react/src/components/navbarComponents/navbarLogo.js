/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

import React, { Component } from "react";
import "./navbarLogo.scss";
import logo from "../../images/logo.svg";

class NavbarLogo extends Component {
  render() {
    return (
      <a className="navbar-brand mx-auto" href="/">
        <img src={logo} alt="One Piece Logo" />
      </a>
    );
  }
}

export default NavbarLogo;
