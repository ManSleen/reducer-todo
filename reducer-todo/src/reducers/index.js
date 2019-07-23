import uuid from "uuidv4";

export const ADD_ITEM = "ADD_ITEM";

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
    default:
      return state;
  }
};
