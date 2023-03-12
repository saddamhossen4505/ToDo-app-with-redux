import axios from "axios";
import {
  TODO_ADD_FAILED,
  TODO_ADD_REQ,
  TODO_ADD_SUCCESS,
  TODO_DELETE,
  TODO_REQ,
  TODO_REQ_FAILED,
  TODO_REQ_SUCCESS,
} from "./actionTypes";

// Get AllData Action.
export const getAllData = () => async (dispatch) => {
  try {
    dispatch({ type: TODO_REQ });
    await axios
      .get("http://localhost:5050/todos")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: TODO_REQ_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: TODO_REQ_FAILED });
      });
  } catch (error) {
    console.log(error.message);
  }
};

// Todo add Action.
export const todoAdd = (input) => async (dispatch) => {
  try {
    dispatch({ type: TODO_ADD_REQ });
    await axios
      .post("http://localhost:5050/todos", { name: input })
      .then((res) => {
        dispatch({ type: TODO_ADD_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: TODO_ADD_FAILED });
      });
  } catch (error) {
    console.log(error.message);
  }
};

// Todo Delete Action.
export const todoDelete = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`http://localhost:5050/todos/${id}`)
      .then((res) => {
        dispatch({ type: TODO_DELETE, payload: id });
      })
      .catch((error) => {});
  } catch (error) {
    console.log(error.message);
  }
};
