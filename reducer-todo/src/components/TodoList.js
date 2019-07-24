import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleCompleted, clearCompleted, filterAll }) => {
  return (
    <div>
      <h3>Have fun doing all this stuff!</h3>
      <button onClick={clearCompleted}>Clear Completed</button>

      <ul>
        {todos.map(todo => (
          <Todo toggleCompleted={toggleCompleted} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
