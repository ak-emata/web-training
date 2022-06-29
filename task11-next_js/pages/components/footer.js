/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary footer component
 */

import React, { Component } from "react";
import "./footer";

import Image from "next/image";

import Calavera from "../images/calavera.svg";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Image src={Calavera} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at vel
          congue scelerisque tortor tortor.
        </p>
      </div>
    );
  }
}

export default Footer;
