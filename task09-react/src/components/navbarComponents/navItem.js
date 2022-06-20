/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

import React, { Component } from "react";

class NavItem extends Component {
  render() {
    return (
      <li className="nav-item">
        <a href={this.props.redirectTo} className="nav-link">
          {this.props.text}
        </a>
      </li>
    );
  }
}

export default NavItem;
