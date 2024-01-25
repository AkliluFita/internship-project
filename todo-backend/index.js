import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { tasks } from "./dommyData.js";
import mongoose from "mongoose";
import postRoute from "./routes/post.js";

const app = express();

const PORT = process.env.PORT || 8000;

// Loading Environment Variables
dotenv.config();

// to fetch json data
app.use(express.json());

// to support JSON-encoded
app.use(bodyParser.json());

// for core policy
app.use(
  cors({
    credentials: true,
    origin: `http://localhost:5173`,
  })
);

// middleware for post route
app.use("/api/v1/post/", postRoute);

// Define a route to get all todo tasks
app.get("/api/v1/tasks", (req, res) => {
  res.json(tasks);
});

// get the tasks based on their status
app.get("/api/v1/tasks/:status", (req, res) => {
  const status = req.params.status;
  const filteredTasks = tasks.filter((task) => task.status === status);

  if (filteredTasks.length === 0) {
    res.status(404);
  } else {
    // Simulate a delay to mimic a backend response
    setTimeout(() => {
      res.json(filteredTasks);
    }, 300);
  }
});

// middleware for post route
app.use("/api/v1/post/", postRoute);

// connect to the database
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(console.log("the DB is connected"))
  .catch((err) => console.log(err));

// listen to the server
var server = app.listen(PORT, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`the server is running at port:${PORT}`);
  console.log("the app listening at http://%s:%s", host, port);
});
