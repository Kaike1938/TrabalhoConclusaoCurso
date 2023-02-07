import React, { Component } from "react";
import Game from "../src/pages/integration/Game";

class Tela extends Component {
  render() {
    return (
      <div style={boardsContainer}>
        <Game />
      </div>
    );
  }
}

export default Tela;

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100vw",
  marginTop: 30,
  marginBottom: 50
};
