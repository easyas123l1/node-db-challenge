const db = require("../data/db-config");

module.exports = {
  getTasks,
  getTaskId,
  addTask
};

function getTasks() {
  return db("tasks");
}

function getTaskId(id) {
  return db("tasks").where("id", "=", id);
}

function addTask(data) {
  return db("tasks")
    .insert(data, "id")
    .then(ids => {
      const [id] = ids;

      return getTaskId(id);
    });
}
