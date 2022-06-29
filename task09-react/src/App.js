import "./App.scss";

import React, { Component } from "react";

import CustomNavbar from "./components/customNavbar";
import Sipnosis from "./components/sipnosis";
import Searchbar from "./components/searchbar";
import DataSection from "./components/dataSection";
import Footer from "./components/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    this.sortData = this.sortData.bind(this);
  }

  sortData(a, b) {
    return a.name > b.name ? 1 : -1;
  }

  componentDidMount() {
    fetch("https://static.akurey.com/trainings/OnePieceInformation.json")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: {
            islands: json.islands.sort(this.sortData),
            characters: json.characters.sort(this.sortData),
            mistObjects: json.mysticObjects.sort(this.sortData),
          },
        });
      });
  }

  render() {
    return (
      <>
        <CustomNavbar />
        <Sipnosis />
        <Searchbar />
        <DataSection
          section="Characters"
          amountToShow={4}
          data={this.state.data.characters}
        />

        <DataSection
          section="Islands"
          amountToShow={3}
          data={this.state.data.islands}
        />

        <DataSection
          section="Mist Objects"
          amountToShow={4}
          data={this.state.data.mistObjects}
        />
        <Footer />
      </>
    );
  }
}

export default App;
