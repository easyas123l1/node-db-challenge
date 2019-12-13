const db = require("../data/db-config");

module.exports = {
  getProjects,
  getProjectId
};

// return all projects.
function getProjects() {
  return db("projects");
}

function getProjectId(id) {}
