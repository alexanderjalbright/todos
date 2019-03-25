import React, { Component } from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItemText: "",
      todos: ["Loading..."]
    };
  }

  componentDidMount() {
    fetch("https://localhost:44347/api/todos")
      .then(res => res.json())
      .then(json => this.setState({ todos: json }));
  }

  resetAll = () => {
    this.setState({ currentItemText: "", todos: [] });
  };

  setText = text => {
    this.setState({ currentItemText: text });
  };

  addNew = text => {
    fetch("https://localhost:44347/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(text)
    })
      .then(res => {
        if (res.ok) {
          const newTodos = [...this.state.todos, text];
          this.setState({ todos: newTodos });
        }
      })
      .catch(err => {
        console.error(err);
      });
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
