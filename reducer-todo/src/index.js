import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "semantic-ui-css/semantic.min.css";

import { reducer, initialState } from "./reducers";

const App = () => {
  const [{ todos }, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Todo List:</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
