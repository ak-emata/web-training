/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary navbar component
 */
import React, { Component } from "react";
import "./navbar.scss";

import NavbarLogo from "./navbarComponents/navbarLogo";
import LangSelector from "./navbarComponents/langSelector";
import NavItem from "./navbarComponents/navItem";

class Navbar extends Component {
  toggleCollapse(id) {
    console.log(id);
  }
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarInfo"
          aria-controls="navbarInfo"
          aria-expanded="false"
          onClick={this.toggleCollapse.bind(this, "navbarInfo")}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <NavbarLogo />

        <div className="collapse navbar-collapse" id="navbarInfo">
          <ul className="navbar-nav nav nav-fill bg-white">
            <NavItem text="Home" redirectTo="/" />
            <NavItem text="Characters" redirectTo="/" />
            <NavItem text="Islands" redirectTo="/" />
            <NavItem text="Mist Objects" redirectTo="/" />

            <li className="nav-item">
              <div className="nav-link">
                <LangSelector language="English" />
                <LangSelector language="Spanish" />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
