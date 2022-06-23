/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary data section component
 */

import React, { Component } from "react";
import "./dataSection";

import DataSectionHeading from "./dataSectionComponents/dataSectionHeading";
import CardContainer from "./dataSectionComponents/cardContainer";

class DataSection extends Component {
  render() {
    return (
      <div class="data__section">
        <DataSectionHeading section={this.props.section} />
        <CardContainer
          section={this.props.section}
          amountToShow={this.props.amountToShow}
          data={this.props.data}
        />
      </div>
    );
  }
}

export default DataSection;
