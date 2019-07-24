import React from "react";
import Todo from "./Todo";
import { Card, Button } from "semantic-ui-react";

const TodoList = ({ todos, toggleCompleted, clearCompleted, filterAll }) => {
  return (
    <div>
      <h3>Have fun doing all this stuff!</h3>
      <Button
        content="Clear Completed"
        icon="trash"
        color="red"
        onClick={clearCompleted}
      />

      <Card.Group>
        {todos.map(todo => (
          <Todo toggleCompleted={toggleCompleted} todo={todo} />
        ))}
      </Card.Group>
    </div>
  );
};

export default TodoList;
