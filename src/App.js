import React, { Component } from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
        <button>Reset All</button>
      </div>
    );
  }
}

export default App;
