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
      <li class="nav-item">
        <a href={this.props.redirectTo} class="nav-link">
          {this.props.text}
        </a>
      </li>
    );
  }
}

export default NavItem;
