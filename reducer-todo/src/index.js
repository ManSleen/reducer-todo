import React, { useState, useReducer, createRef } from "react";
import ReactDOM from "react-dom";
import { Container, Grid } from "semantic-ui-react";

import { ADD_ITEM, TOGGLE_ITEM, CLEAR_COMPLETED } from "./reducers";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

import { reducer, initialState } from "./reducers";

const App = () => {
  const [{ todos }, dispatch] = useReducer(reducer, initialState);

  const addTodo = item => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const toggleCompleted = id => {
    dispatch({ type: TOGGLE_ITEM, payload: id });
    console.log("We Toggled!");
  };

  const clearCompleted = () => {
    dispatch({ type: CLEAR_COMPLETED });
  };

  return (
    <div>
      <Container>
        <h1
          style={{
            textAlign: "center",
            fontSize: "3.5rem",
            marginBottom: "30px"
          }}
        >
          Todo List
        </h1>
        <Grid columns={2} divided>
          <Grid.Column width={4}>
            <TodoForm addTodo={addTodo} />
          </Grid.Column>

          <Grid.Column width={12}>
            <TodoList
              clearCompleted={clearCompleted}
              toggleCompleted={toggleCompleted}
              todos={todos}
            />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
