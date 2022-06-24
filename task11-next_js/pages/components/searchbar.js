/**
 * All Rights Reserved
 * This software is property information of AKUREY S.A.
 * Contact us at contact@akurey.com
 * @summary search bar component
 */

import React, { Component } from "react";
import "./searchbar";

import { SearchSVGIcon } from "@react-md/material-icons";

class Searchbar extends Component {
  render() {
    return (
      <form className="search__bar">
        <SearchSVGIcon id="search__icon" />

        <input
          type="search"
          placeholder="Search Characters, Islands or Objects"
        />
      </form>
    );
  }
}

export default Searchbar;
