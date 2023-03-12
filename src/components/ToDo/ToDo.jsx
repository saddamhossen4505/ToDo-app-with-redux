import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData, todoAdd, todoDelete } from "../../redux/toDo/toDoActions";
import "./ToDo.scss";

const ToDo = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const [input, setInput] = useState("");

  // HandleTodoAdd.
  const handleTodoAdd = () => {
    dispatch(todoAdd(input));
  };

  // DeleteTodo.
  const handleDeleteTodo = (id) => {
    dispatch(todoDelete(id));
  };

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="todo">
                  <h2>My ToDos</h2>
                  <hr />
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="TODO"
                  />
                  <button onClick={handleTodoAdd}>Add</button>
                  <hr />
                  <ul className="list-group">
                    {todos.map(({ name, id }, index) => {
                      return (
                        <li className="list-group-item" key={index}>
                          {name}
                          <button onClick={() => handleDeleteTodo(id)}>
                            <i className="bx bx-trash"></i>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
