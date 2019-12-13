const db = require("../data/db-config");

module.exports = {
  getProjects,
  getProjectId,
  getTasksByProjectId,
  getResourcesByProjectId,
  addProject,
  updateProject,
  deleteProject
};

// return all projects.
function getProjects() {
  return db("projects").then(projects => {
    projects.forEach(project => {
      project.completed = project.completed > 0;
    });
    return projects;
  });
}

function getProjectId(id) {
  return db("projects").where("id", "=", id);
}

function getTasksByProjectId(id) {
  return db("tasks")
    .where("project_id", "=", id)
    .then(res => {
      [re] = res;
      re.completed = re.completed > 0;
      return re;
    });
}

function getResourcesByProjectId(id) {
  return db("resources")
    .join("project_resource", "resources.id", "project_resource.resource_id")
    .where("project_resource.project_id", "=", id);
}

function addProject(data) {
  return db("projects")
    .insert(data, "id")
    .then(ids => {
      const [id] = ids;

      return getProjectId(id).then(project => {
        project.completed = project.completed > 0;
        return project;
      });
    });
}

function updateProject(id, data) {
  return db("projects")
    .where({ id })
    .update(data);
}

function deleteProject(id) {
  return db("projects")
    .where({ id })
    .del();
}
