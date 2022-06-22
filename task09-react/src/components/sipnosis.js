/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary sipnosis component
 */
import React, { Component } from "react";
import "./sipnosis.scss";

import mobileLogo from "../images/logo.svg";

import SipnosisImage from "./sipnosisComponents/sipnosisImage";
import CollapseCard from "./sipnosisComponents/collapseCard";

class Sipnosis extends Component {
  constructor(props) {
    super(props);
    this.openCard = this.openCard.bind(this);

    this.state = {
      cardIsOpen: false,
    };
  }

  openCard() {
    this.setState({ cardIsOpen: !this.state.cardIsOpen });
  }
  render() {
    return (
      <section className="sipnosis">
        <SipnosisImage />
        <img
          className={`mobile__logo ${
            this.state.cardIsOpen ? "mobile__logo--expanded" : ""
          }`}
          id="mobile__logo"
          src={mobileLogo}
          alt=""
        />

        <CollapseCard
          open={this.state.cardIsOpen}
          buttonAction={this.openCard}
        />
      </section>
    );
  }
}

export default Sipnosis;
