import http from "../http-common";

const getAllTodos = () => {
  return http.get("http://localhost:8000/api/v1/tasks");
};
const getTodosByStatus = (status) => {
  return http.get(`http://localhost:8000/api/v1/tasks/${status}`);
};

const todoService = {
  getAllTodos,
  getTodosByStatus,
};

export default todoService;
