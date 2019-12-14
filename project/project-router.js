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
      res.status(500).json({ message: "failed to get project" });
    });
});

// get project resource and task all by project ID
router.get("/:id", (req, res) => {
  Project.getProjectId(req.params.id)
    .then(pro => {
      return Project.getResourcesByProjectId(req.params.id).then(resource => {
        return Project.getTasksByProjectId(req.params.id).then(task => {
          task.completed = task.completed > 0;
          let newTask = task;
          let back = {
            id: pro[0].id,
            name: pro[0].name,
            description: pro[0].description,
            completed: pro.completed > 0,
            tasks: task,
            resources: resource
          };
          res.status(200).json(back);
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "failed to get project by id" });
    });
});

// add project
router.post("/", (req, res) => {
  const data = req.body;

  if (data.name) {
    Project.addProject(data)
      .then(proj => {
        res.status(201).json(proj);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: "failed to create a new project" });
      });
  } else {
    res.status(400).json({ message: "project must have a name" });
  }
});

router.put("/:id", (req, res) => {
  const data = req.body;

  Project.updateProject(req.params.id, data)
    .then(count => {
      if (count) {
        return Project.getProjectId(req.params.id).then(proj => {
          res.status(200).json({ proj });
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "failed to update project" });
    });
});

router.delete("/:id", (req, res) => {
  Project.deleteProject(req.params.id)
    .then(count => {
      if (count) {
        res.status(204).json({ removed: count });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "failed to delete project" });
    });
});

module.exports = router;
