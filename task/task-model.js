const db = require("../data/db-config");

module.exports = {
  getTasksByProjectId,
  getTaskId
};

function getTasksByProjectId(id) {
  return db
    .select(
      "projects.name as project name",
      "projects.description as project description",
      "tasks.*"
    )
    .from("tasks")
    .join("projects", "tasks.project_id", "=", "projects.id")
    .where("tasks.project_id", id)
    .then(tasks => {
      [task] = tasks;
      task.completed = task.completed > 0;
      return task;
    });
}

function getTaskId(id) {
  return db("tasks")
    .where("id", "=", id)
    .then(tasks => {
      [task] = tasks;
      task.completed = task.completed > 0;
      return task;
    });
}
