/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

import React, { Component } from "react";
import spainFlag from "../../images/flags/spain.svg";
import usaFlag from "../../images/flags/usa.svg";

class LangSelector extends Component {
  render() {
    return (
      <button className="lang__selector">
        <span className="lang__name"> Spanish </span>
        {this.props.language === "English" ? (
          <img src={usaFlag} alt="" />
        ) : (
          <img src={spainFlag} alt="" />
        )}
      </button>
    );
  }
}

export default LangSelector;
