const db = require("../data/db-config");

module.exports = {
  getProjects,
  getProjectId
};

// return all projects.
function getProjects() {
  return db("projects");
}

function getProjectId(id) {
  return db("projects")
    .join("tasks", "projects.id", "tasks.project_id")
    .where("projects.id", "=", id);
}
