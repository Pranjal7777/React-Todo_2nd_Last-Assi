import { Routes, Route } from "react-router";
import "./App.css";
import { AddToToDo } from "./components/addTodo";
import { ShowTodoList } from "./components/showTodo";
import { SingleTodo } from "./components/singleTodo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <AddToToDo />
              <ShowTodoList />{" "}
            </div>
          }
        />
        <Route path="/todo/:id" element={<SingleTodo />} />
      </Routes>
    </div>
  );
}

export default App;
