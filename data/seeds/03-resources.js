exports.seed = function(knex) {
  return knex("resources").insert([
    { id: 1, name: "resource1", description: "" },
    { id: 2, name: "resource2", description: "" },
    { id: 3, name: "resource3", description: "" }
  ]);
};
