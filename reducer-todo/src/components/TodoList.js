import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      <h3>Have fun doing all this stuff!</h3>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
