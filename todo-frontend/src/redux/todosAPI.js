import { createAsyncThunk } from "@reduxjs/toolkit";
import todoService from "./todoService";

export const getAllTodosAPI = createAsyncThunk("todos/getAll", async () => {
  try {
    const res = await todoService.getAllTodos();
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const getTodoByStatusAPI = createAsyncThunk(
  "todos/getByStatus",
  async (status) => {
    try {
      const res = await todoService.getTodosByStatus(status);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
