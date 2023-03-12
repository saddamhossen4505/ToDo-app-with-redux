import { combineReducers } from "redux";
import toDoReducer from "./toDo/toDoReducer";

// Create RootReducer.
const rootReducer = combineReducers({
  todo: toDoReducer,
});

// Export.
export default rootReducer;
