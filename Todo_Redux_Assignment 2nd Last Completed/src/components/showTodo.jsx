import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addOnce } from "../Redux/action";
import { Link } from "react-router-dom";

export const ShowTodoList = () => {
  const todo = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const toogleStatus = (id, status) => {
    axios.patch(`http://localhost:3001/todo/${id}`, {
      status: status ? false : true,
    });
    refresh();
  };

  const delTodo = (id) => {
    axios.delete(`http://localhost:3001/todo/${id}`);
    refresh();
  };

  const refresh = () => {
    axios.get("http://localhost:3001/todo").then((res) => {
      dispatch(addOnce(res.data));
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sl.NO</th>
            <th>Task</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((el, i) => {
            return (
              <tr key={el.id}>
                <td>{i}</td>
                <td>
                  <Link to={`/todo/${el.id}`}>{el.title}</Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      toogleStatus(el.id, el.status);
                    }}
                  >
                    {el.status ? "Completed" : "Pending"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      delTodo(el.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
