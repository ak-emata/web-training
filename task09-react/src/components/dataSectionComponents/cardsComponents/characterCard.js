/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary character card component
 */

import React, { Component } from "react";
import "./characterCard";

import Ace from "../../../images/ace.svg";
import Luffy from "../../../images/monkeydluffy.svg";
import Nico from "../../../images/nico.svg";
import Zoro from "../../../images/zoro.svg";
import Placeholder from "../../../images/placeholder.svg";

class CharacterCard extends Component {
  constructor(props) {
    super(props);

    this.getImage = this.getImage.bind(this);
  }

  getImage() {
    switch (this.props.image) {
      case "monkeydluffy.svg":
        return Luffy;
      case "zoro.svg":
        return Zoro;
      case "nico.svg":
        return Nico;
      case "ace.svg":
        return Ace;
      default:
        return Placeholder;
    }
  }

  render() {
    return (
      <a className="character__card" href="/">
        <span className="character__card__name">{this.props.name}</span>
        <div className="character__card__gradient"></div>
        <img src={this.getImage()} alt="" />
      </a>
    );
  }
}

export default CharacterCard;
