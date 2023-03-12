import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { testRedux } from "./middlewares/test";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

// ReduxMiddlewares.
const middlewares = [testRedux, thunk];

// Create ReduxStore.
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// Export.
export default store;
