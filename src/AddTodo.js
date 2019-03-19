import React, { Component } from "react";

export default class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }
  inputChange(event) {
    this.setState({ todo: event.target.value });
  }
  render() {
    const add = this.props.add;
    return (
      <div>
        <label>
          Item:
          <input
            type="text"
            value={this.state.todo}
            onChange={this.inputChange.bind(this)}
          />
        </label>
        <button onClick={add.bind(this, this.state.todo)}>Add</button>
      </div>
    );
  }
}
