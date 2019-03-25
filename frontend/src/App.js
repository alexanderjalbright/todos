import React, { Component } from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItemText: "",
      todos: ["Item 1", "Item 2", "Item 3"]
    };
  }

  resetAll = () => {
    this.setState({ currentItemText: "", todos: [] });
  };

  setText = text => {
    this.setState({ currentItemText: text });
  };

  addNew = text => {
    const newTodos = [...this.state.todos, text];
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div>
        <AddTodo
          text={this.state.currentItemText}
          setText={this.setText}
          addNew={this.addNew}
        />
        <TodoList todos={this.state.todos} />
        <button onClick={this.resetAll}>Reset All</button>
      </div>
    );
  }
}
