const express = require("express");

const Project = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  Project.getProjects()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "failed to get recipes" });
    });
});

module.exports = router;
