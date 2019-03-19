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

  addTodo = newItem => {
    const list = this.state.todoList;
    list.push(newItem);
    this.setState({ todoList: list });
  };

  removeTodo = index => {
    const list = this.state.todoList;
    list.splice(index, 1);
    this.setState({ todoList: list });
  };

  render() {
    return (
      <div>
        <AddTodo add={this.addTodo} />
        <TodoList todoList={this.state.todoList} remove={this.removeTodo} />
        <button>Reset All</button>
      </div>
    );
  }
}
