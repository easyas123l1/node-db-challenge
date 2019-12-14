const express = require("express");

const Resource = require("./resource-model");

const router = express.Router();

// get all resources
router.get("/", (req, res) => {
  Resource.getResources()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "failed to get resources" });
    });
});

// get resource by id
router.get("/:id", (req, res) => {
  Resource.getResourceId(req.params.id)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "failed to get resource by id" });
    });
});

router.post("/", (req, res) => {
  const data = req.body;

  if (data.name) {
    Resource.addResource(data)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: "failed to create a new resource" });
      });
  } else {
    res.status(400).json({ message: "resource must have a name" });
  }
});

module.exports = router;
