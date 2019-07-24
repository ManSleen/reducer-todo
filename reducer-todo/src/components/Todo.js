import React from "react";

const Todo = ({ todo, toggleCompleted }) => {
  console.log(todo);
  return (
    <li
      className={todo.completed ? "completed" : ""}
      onClick={() => toggleCompleted(todo.id)}
    >
      {todo.item}
    </li>
  );
};

export default Todo;
