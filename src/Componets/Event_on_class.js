import React, { Component } from "react";

class Event_on_class extends Component {
  click_handler() {
    console.log("clicked");
    alert("click class componet");
  }
  render() {
    return (
      <div>
        <button onClick={this.click_handler}>click</button>
      </div>
    );
  }
}

export default Event_on_class;
