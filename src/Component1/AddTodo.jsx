// AddTodo.js
import React, { useState } from "react";
import { useTodoContext } from "../Context/useContext.jsx";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const { dispatch } = useTodoContext();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
