import React, { Component } from "react";
import Fren from "../src/pages/integration/X";

class Amigo extends Component {
  render() {
    return (
      <div style={boardsContainer}>
        <Fren />
      </div>
    );
  }
}

export default Amigo;

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100vw",
  marginTop: 30,
  marginBottom: 50
};
