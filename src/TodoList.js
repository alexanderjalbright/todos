import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    const { todoList, remove } = this.props;
    const list = todoList.map(function(item, index) {
      return (
        <ul>
          <li key={index}>{item}</li>
          <button onClick={remove.bind(this, index)}>Delete</button>
        </ul>
      );
    });
    return <div>{list}</div>;
  }
}
