import http from "../http-common";

const getAllTodos = () => {
  return http.get("/tasks");
};
const getTodosByStatus = (status) => {
  return http.get(`/tasks/${status}`);
};

const todoService = {
  getAllTodos,
  getTodosByStatus,
};

export default todoService;
