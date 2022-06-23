/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary Collapse Card component for the sipnosis component
 */

import React, { Component } from "react";
import "./collapseCard";

import { ExpandMoreSVGIcon, ExpandLessSVGIcon } from "@react-md/material-icons";

import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

class CollapseCard extends Component {
  render() {
    return (
      <div className={`${this.props.open ? "shownLogo" : ""}`}>
        <div className="collapse__card" id="collapse__card">
          <h1>Sipnosis</h1>
          <p>
            Dawn Island is an island located in the East Blue and where the Goa
            Kingdom is situated.
          </p>
          <p>
            It is the home island of Monkey D. Luffy and the starting point of
            his journey into piracy, as well as the home island of his father,
            Monkey D. Dragon.
          </p>
          <Collapse in={this.props.open}>
            <div id="SipnosisText">
              <p>
                This is also the adopted home of Portgas D. Ace after the death
                of his mother and the home of Sabo and his family.
              </p>
              <p>
                Reverse Mountain is an extremely tall mountain at one of the
                points where the four Blues meet and is one of the two known
                entrances to the Grand Line.
              </p>
              <p>
                It is located in the Red Line and is the geographical antipode
                of Mary Geoise.
              </p>
            </div>
          </Collapse>
          <Button
            onClick={this.props.buttonAction}
            aria-controls="SipnosisText"
            aria-expanded={this.props.open}
            id="sipnosisButton"
          >
            {this.props.open ? (
              <ExpandLessSVGIcon id="sipnosisicon" />
            ) : (
              <ExpandMoreSVGIcon id="sipnosisicon" />
            )}

            {this.props.open ? "Read Less" : "Read All"}
          </Button>
        </div>
      </div>
    );
  }
}

export default CollapseCard;
