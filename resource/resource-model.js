const db = require("../data/db-config");

module.exports = {
  getResources,
  getResourceId,
  addResource
};

function getResources() {
  return db("resources");
}

function getResourceId(id) {
  return db("resources").where("id", "=", id);
}

function addResource(data) {
  return db("resources")
    .insert(data, "id")
    .then(ids => {
      const [id] = ids;

      return getResourceId(id);
    });
}
