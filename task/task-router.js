const express = require("express");

const Task = require("./task-model");

const router = express.Router();

router.get("/project/:id", (req, res) => {
  Task.getTasksByProjectId(req.params.id)
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

module.exports = router;
