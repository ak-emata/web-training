/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary Mist Object cards component
 */
import React, { Component } from "react";
import "./mistObjectCard";

import Object from "../../../images/object.svg";
import Placeholder from "../../../images/placeholder.svg";

class MistObjectCard extends Component {
  constructor(props) {
    super(props);

    this.getImage = this.getImage.bind(this);
  }

  getImage() {
    switch (this.props.image) {
      case "object.svg":
        return Object;
      default:
        return Placeholder;
    }
  }

  render() {
    return (
      <a href="/" className="mistObject__card">
        <img src={this.getImage()} />
        <div className="mistObject__card__textContainer">
          <h3 className="mistObject__card__name">{this.props.name}</h3>
          <p className="mistObject__card__description">
            {this.props.description}
          </p>
        </div>
      </a>
    );
  }
}

export default MistObjectCard;
