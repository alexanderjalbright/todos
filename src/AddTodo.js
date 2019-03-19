import React, { Component } from "react";

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <label>
          Item:
          <input type="text" />
        </label>
        <button>Add</button>
      </div>
    );
  }
}
