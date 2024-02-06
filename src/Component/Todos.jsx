// Todos.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/Todo/todoSlice";
// import "path-to-your-src/styles/tailwind.css"; // Update the path

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.Todos);
  console.log(todos);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Todos List</h1>
      <ul>
        {todos?.map((todo) => (
          <li
            key={todo.id}
            className="border p-2 mb-2 flex justify-between items-center"
          >
            <span>{todo.text}</span>
            <button
              type="button"
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-white px-3 py-1"
            >
              Delete Todo
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
