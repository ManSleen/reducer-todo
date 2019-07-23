import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>Heres the todo list</h2>
      {todos.map(todo => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
