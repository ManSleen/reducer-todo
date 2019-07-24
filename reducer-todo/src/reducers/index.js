import uuid from "uuidv4";

export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";

export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newTodo = {
        item: action.payload,
        completed: false,
        id: uuid()
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    default:
      return state;
  }
};
