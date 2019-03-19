import React, { Component } from "react";

export default class AddTodo extends Component {
  render() {
    const { addTodo } = this.props;
    return (
      <div>
        <label>
          Item:
          <input type="text" onChange={addTodo} />
        </label>
        <button>Add</button>
      </div>
    );
  }
}
