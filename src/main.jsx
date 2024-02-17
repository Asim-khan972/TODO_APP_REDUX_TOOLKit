import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { TodoProvider } from "./Context/useContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <TodoProvider>
      <App />
    </TodoProvider>
  </Provider>
);
