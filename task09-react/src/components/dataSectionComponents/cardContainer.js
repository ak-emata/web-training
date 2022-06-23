/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary card container component
 */

import React, { Component } from "react";
import "./cardContainer";
import CharacterCard from "./cardsComponents/characterCard";

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.getId = this.getId.bind(this);
    this.renderCards = this.renderCards.bind(this);
  }

  getId() {
    switch (this.props.section) {
      case "Characters":
        return "charactersContainer";

      case "Islands":
        return "islandsContainer";

      case "Mist Objects":
        return "mistObjectsContainer";

      default:
        break;
    }
  }

  renderCards() {
    let elements = [];
    if (this.props.data !== undefined) {
      for (let pos = 0; pos < this.props.amountToShow; pos++) {
        const element = this.props.data[pos];

        switch (this.props.section) {
          case "Characters":
            elements.push(
              <CharacterCard name={element.name} image={element.img} />
            );
            break;
          case "Islands":
            elements.push(<div></div>);
            break;
          //return "islandsContainer";

          case "Mist Objects":
            elements.push(<div></div>);

            break;
          //return "mistObjectsContainer";

          default:
            break;
        }
      }
    }

    return elements;
  }

  render() {
    return (
      <div
        class={`${
          this.props.section === "Mist Objects"
            ? "card__container--grid"
            : "card__container"
        }`}
        id={this.getId()}
      >
        {this.renderCards()}
      </div>
    );
  }
}

export default CardContainer;
