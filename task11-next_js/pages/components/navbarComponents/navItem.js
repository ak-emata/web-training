/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

import React, { Component } from "react";

import Nav from "react-bootstrap/Nav";
import "./navItem";

class NavItem extends Component {
  render() {
    return (
      <Nav.Link
        className={`${this.props.active ? "nav-link--active" : ""}`}
        href={this.props.redirectTo}
      >
        {this.props.text}
      </Nav.Link>
    );
  }
}

NavItem.defaultProps = {
  active: false,
};

export default NavItem;
