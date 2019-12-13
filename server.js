const express = require("express");
const helmet = require("helmet");

const ProjectRouter = require("./project/project-router.js");
const ResourceRouter = require("./resource/resource-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/project", ProjectRouter);
server.use("/api/resource", ResourceRouter);

module.exports = server;
