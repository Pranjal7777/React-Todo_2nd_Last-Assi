import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

export const SingleTodo = () => {
  const { id } = useParams();

  const toogleStatus = (id, status) => {
    axios.patch(`http://localhost:3001/todo/${id}`, {
      status: status ? false : true,
    });
    ShowSingle();
  };

  const delTodo = (id) => {
    axios.delete(`http://localhost:3001/todo/${id}`);
    window.location.href = "/";
  };

  const [show, setShow] = useState({});

  useEffect(() => {
    ShowSingle();
  }, []);

  const ShowSingle = () => {
    axios.get(`http://localhost:3001/todo/${id}`).then((res) => {
      setShow(res.data);
    });
  };

  return (
    <div>
      <h2>{show.title}</h2>
      <button
        onClick={() => {
          toogleStatus(show.id, show.status);
        }}
      >
        {show.status ? "Completed" : "Pending"}
      </button>
      <button
        onClick={() => {
          delTodo(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
