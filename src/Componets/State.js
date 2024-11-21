import React, { Component } from "react";

class Subscribe extends Component {
  constructor() {
    super();
    this.state = {
      channel: "DG",
    };
  }
  //function
  changeMessage() {
    this.setState({
      channel: "tnx for subscrib",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.channel}</h1>
        <button onClick={() => this.changeMessage()}>subscrib</button>
      </div>
    );
  }
}
export default Subscribe;
