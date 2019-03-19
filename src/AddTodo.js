import React, { Component } from "react";

export default class AddTodo extends Component {
  render() {
    const { add } = this.props;
    return (
      <div>
        <label>
          Item:
          <input type="text" onChange={add.bind(this)} />
        </label>
        <button type="submit">Add</button>
      </div>
    );
  }
}
