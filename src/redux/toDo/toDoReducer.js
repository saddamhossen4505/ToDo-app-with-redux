import {
  TODO_ADD_FAILED,
  TODO_ADD_REQ,
  TODO_ADD_SUCCESS,
  TODO_DELETE,
  TODO_REQ,
  TODO_REQ_FAILED,
  TODO_REQ_SUCCESS,
} from "./actionTypes";
import { initialState } from "./initialState";

// Create ToDoReducer.
const toDoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODO_REQ:
      return {
        ...state,
        loading: true,
      };

    case TODO_REQ_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: payload,
      };

    case TODO_REQ_FAILED:
      return {
        ...state,
        loading: false,
      };

    case TODO_ADD_REQ:
      return {
        ...state,
        loading: true,
      };

    case TODO_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, payload],
      };

    case TODO_ADD_FAILED:
      return {
        ...state,
        loading: false,
      };

    case TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter((data) => data.id !== payload),
      };

    default:
      return state;
  }
};

// Export.
export default toDoReducer;
