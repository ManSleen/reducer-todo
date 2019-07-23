import React from "react";

const Todo = ({ todo }) => {
  console.log(todo);
  return <p>{todo.item}</p>;
};

export default Todo;
