import "./Square";
import React from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { player: "X" };
  }

  handlePlayer() {
    if (this.state.player === "X") {
      this.setState({ player: "O" });
    } else {
      this.setState({ player: "X" });
    }
  }
  renderSquare(i) {
    return (
      <Square
        value={""}
        player={this.state.player}
        handlePlayer={() => this.handlePlayer()}
      />
    );
  }

  render() {
    const status = `Next player: ${this.state.player}`;

    return (
      <div className="center">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
