import uuid from "uuidv4";
import moment from "moment";

export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
      time: "July 23rd 2019, 9:00:02 pm"
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newTodo = {
        item: action.payload,
        completed: false,
        id: uuid(),
        time: moment().fromNow()
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
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed === false)
      };

    default:
      return state;
  }
};
