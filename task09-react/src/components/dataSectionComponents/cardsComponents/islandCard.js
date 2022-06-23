/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary island card component
 */

import React, { Component } from "react";
import "./islandCard";

import { PlaceSVGIcon } from "@react-md/material-icons";

import Dawn from "../../../images/dawn.svg";
import Reverse from "../../../images/reverse.svg";
import Placeholder from "../../../images/placeholder.svg";

class IslandCard extends Component {
  constructor(props) {
    super(props);

    this.getImage = this.getImage.bind(this);
  }

  getImage() {
    switch (this.props.image) {
      case "dawn.svg":
        return Dawn;
      case "reverse.svg":
        return Reverse;
      default:
        return Placeholder;
    }
  }
  render() {
    return (
      <a href="/" className="island__card">
        <div className="island__card__textContainer">
          <span className="island__card__name">{this.props.name}</span>
          <div className="island__card__locationContainer">
            <PlaceSVGIcon id="placeIcon" />
            <span className="island__card__location">
              {this.props.location}
            </span>
          </div>
        </div>
        <img src={this.getImage()} alt="" />
      </a>
    );
  }
}

export default IslandCard;
