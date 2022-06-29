/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary image component for the sipnosis component
 */
import React, { Component } from "react";
import "./sipnosisImage";

import Image from "next/image";

import sipnosisImg from "../../images/sipnosis.svg";

class SipnosisImage extends Component {
  render() {
    return (
      <div className="sipnosis__image">
        <div className="sipnosis--gradient"></div>
        <Image src={sipnosisImg} alt="" />
      </div>
    );
  }
}

export default SipnosisImage;