import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { tasks } from "./dommyData.js";

const app = express();

const PORT = process.env.PORT || 8000;

// Loading Environment Variables
dotenv.config();

// to fetch json data
app.use(express.json());

// for core policy
app.use(
  cors({
    credentials: true,
    origin: `http://localhost:5173`,
  })
);

// Define a route to get all todo tasks
app.get("/api/v1/tasks", (req, res) => {
  res.json(tasks);
});

// get the tasks based on their status
app.get("/api/v1/tasks/:status", (req, res) => {
  const status = req.params.status;
  const filteredTasks = tasks.filter((task) => task.status === status);
  // Simulate a delay to mimic a backend response
  setTimeout(() => {
    res.json(filteredTasks);
  }, 300);
});

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`the server is running at port:${PORT}`);
});
