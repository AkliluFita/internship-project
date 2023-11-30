import { createSlice } from "@reduxjs/toolkit";

import { getAllTodosAPI, getTodoByStatusAPI } from "./todosAPI";

const initialState = {
  allTodos: [],
  todoByStatus: [],
  todoStatus: "idle",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodosAPI.pending, (state) => {
        state.todoStatus = "pending";
      })
      .addCase(getAllTodosAPI.fulfilled, (state, { payload }) => {
        state.todoStatus = "success";
        state.allTodos = payload;
      })
      .addCase(getAllTodosAPI.rejected, (state) => {
        state.todoStatus = "failed";
      });
    builder
      .addCase(getTodoByStatusAPI.pending, (state) => {
        state.todoStatus = "pending";
      })
      .addCase(getTodoByStatusAPI.fulfilled, (state, { payload }) => {
        state.todoStatus = "success";
        state.todoByStatus = payload;
      })
      .addCase(getTodoByStatusAPI.rejected, (state) => {
        state.todoStatus = "failed";
      });
  },
});

export default todoSlice.reducer;
