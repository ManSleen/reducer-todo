import React from "react";
import { Card } from "semantic-ui-react";

const Todo = ({ todo, toggleCompleted }) => {
  console.log(todo);
  return (
    <Card
      color="green"
      fluid
      className={todo.completed ? "completed" : ""}
      onClick={() => toggleCompleted(todo.id)}
    >
      <Card.Content>
        <Card.Header>{todo.item}</Card.Header>
        <Card.Meta>Added: {todo.time}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default Todo;
