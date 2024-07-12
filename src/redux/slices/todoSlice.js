import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.read = !todo.read; // Change from completed to read
      }
    },
    updateTodo: (state,action) => {
        const todo = state.find((todo) => todo.id === action.payload.id);
        if (todo) {
            todo.text = action.payload.text;
        }
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
export const { addTodo, toggleComplete,updateTodo ,deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

