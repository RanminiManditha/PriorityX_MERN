const express = require("express");
const Task = require("../models/taskSchema");
const {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

//get all workouts
router.get("/", getTasks);

//get a single workout
router.get("/:id", getTask);

//create a single wokrout
router.post("/", createTask);

//update a workout
router.patch("/:id", updateTask);

//delete a workout
router.delete("/:id", deleteTask);

module.exports = router;
