import React, { Component } from "react";

class Event_bindig extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "selam",
    };
    this.Handeler = this.Handeler.bind(this);
  }
  Handeler() {
    this.setState({
      msg: "chaw",
    });
    console.log(this);
  }
  render() {
    return (
      <div>
        <h1> {this.state.msg}</h1>
        {/* <button onClick={this.Handeler.bind(this)}>click</button> */}

        {/* <button onClick={() => this.Handeler()}>click</button> */}
        <button onClick={this.Handeler}>click</button>
      </div>
    );
  }
}
export default Event_bindig;
