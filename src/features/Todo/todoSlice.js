import { createSlice, nanoid } from "@reduxjs/toolkit";

// can be array or object
const initialState = {
  Todos: [{ id: 1, text: "hello World " }],
};

export const todoSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.Todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.Todos = state.Todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {},
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
