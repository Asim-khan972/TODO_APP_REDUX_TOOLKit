// App.js
import { useState } from "react";
import "./App.css";
import AddTodo from "./Component/AddTodo";
import Todos from "./Component/Todos";

function App() {
  return (
    <>
      <h1 className="text-6xl text-center font-bold my-8">Asim Todo App</h1>
      <div className="max-w-md mx-auto">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
