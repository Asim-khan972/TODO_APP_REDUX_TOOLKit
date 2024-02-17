// TodoList.js
import React from "react";
import { useTodoContext } from "../Context/useContext.jsx";

const TodoList = () => {
  const { todos, dispatch } = useTodoContext();

  //   console.log(todos);
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleEdit = (id, text) => {
    const newText = prompt("Edit todo:", text);
    if (newText !== null) {
      dispatch({ type: "EDIT_TODO", payload: { id, text: newText } });
    }
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };
  const handleAnagram = (t, s) => {
    const h = t.split(" ").sort().join(" ");
    const g = s.split(" ").sort().join(" ");
    console.log(h === g);
  };
  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
          <button onClick={() => handleToggle(todo.id)}>Toggle</button>
          <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <button onClick={() => handleAnagram("am", "am")}>Anagram</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
