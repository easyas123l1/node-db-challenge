const express = require("express");

const Resource = require("./resource-model");

const router = express.Router();

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

module.exports = router;
