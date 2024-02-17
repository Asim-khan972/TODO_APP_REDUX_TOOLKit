// App.js
import { useState } from "react";
import "./App.css";
// import AddTodo from "./Component/AddTodo";
// import Todos from "./Component/Todos";
import AddTodo from "./Component1/AddTodo";
import Todos from "./Component1/Todos";
function App() {
  return (
    <>
      <h1 className="text-6xl text-center font-bold my-8">Asim Todo App</h1>
      <div className="max-w-md mx-auto">
        {/* <AddTodo />
        <Todos /> */}

        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
