import React from "react";

const Todo = ({ todo }) => {
  console.log(todo);
  return <li>{todo.item}</li>;
};

export default Todo;
