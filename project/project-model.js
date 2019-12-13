const db = require("../data/db-config");

module.exports = {
  getProjects,
  getProjectId,
  getTasksByProjectId,
  getResourcesByProjectId,
  addProject
};

// return all projects.
function getProjects() {
  return db("projects");
}

function getProjectId(id) {
  return db("projects").where("id", "=", id);
}

function getTasksByProjectId(id) {
  return db("tasks").where("project_id", "=", id);
}

function getResourcesByProjectId(id) {
  return db("resources")
    .join("project_resource", "resources.id", "project_resource.resource_id")
    .where("project_resource.project_id", "=", id);
}

function addProject(data) {
  return db("project")
    .insert(data, "id")
    .then(ids => {
      const [id] = ids;

      return getProjectId(id);
    });
}
