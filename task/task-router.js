const express = require("express");

const Task = require("./task-model");

const router = express.Router();

router.get("/", (req, res) => {
  Task.getTasks()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "failed to get task" });
    });
});

router.get("/:id", (req, res) => {
  Task.getTaskId(req.params.id)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "failed to get task by id" });
    });
});

router.post("/", (req, res) => {
  const data = req.body;

  if (data.description) {
    Task.addTask(data)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: "failed to create a new task" });
      });
  }
});

module.exports = router;
