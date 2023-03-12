// Create ReduxMiddleWares.
export const testRedux = (store) => (next) => (action) => {
  next(action);
};
