import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      tutorial: "",
    };
  }
  usernamehandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  commenthandler = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  listhandle = (event) => {
    this.setState({
      tutorial: event.target.value,
    });
  };
  render() {
    return (
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.usernamehandler}
          />
        </div>
        <div>
          <lable>comment</lable>
          <textarea
            value={this.state.comment}
            onChange={this.commenthandler}
          ></textarea>
        </div>
        <div>
          <lable>tutorial</lable>
          <select value={this.state.tutorial} onChange={this.listhandle}>
            <option value="js">js</option>
            <option value="java">java</option>
            <option value="angular">angular</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
