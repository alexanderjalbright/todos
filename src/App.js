import React, { Component } from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: []
    };
  }

  addTodo = x => {
    const list = todoList;
    list.push(x);
    this.setState({ todoList: list });
  };

  render() {
    return (
      <div>
        <AddTodo todoList={this.addTodo} />
        <TodoList />
        <button>Reset All</button>
      </div>
    );
  }
}

export default App;
