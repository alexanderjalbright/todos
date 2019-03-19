import React, { Component } from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: ["Item 1", "Item 2", "Item 3"]
    };
  }

  addTodo = x => {
    const list = this.state.todoList;
    list.push(x);
    this.setState({ todoList: list });
  };

  render() {
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        <TodoList todoList={this.state.todoList} />
        <button>Reset All</button>
      </div>
    );
  }
}
