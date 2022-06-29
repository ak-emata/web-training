/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary short description for the file
 */

import React, { Component } from "react";
import "./dataSectionHeading";

class DataSectionHeading extends Component {
  render() {
    return (
      <div className="data__section__heading">
        <h2>{this.props.section}</h2>
        <button>See All</button>
      </div>
    );
  }
}
export default DataSectionHeading;
