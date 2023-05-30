import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }
  handleClick(value) {
    if (this.props.player === "X" && this.state.value === "") {
      this.setState({ value: "X" });
      this.props.handlePlayer();
    }
    if (this.props.player === "O" && this.state.value === "") {
      this.setState({ value: "O" });
      this.props.handlePlayer();
    }
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.handleClick(this.props.value)}
      >
        {this.state.value}
      </button>
    );
  }
}

export default Square;
