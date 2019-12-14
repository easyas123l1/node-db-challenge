exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      id: 1,
      description: "onfirst",
      notes: "",
      project_id: 1,
      completed: false
    },
    {
      id: 2,
      description: "onsecond",
      notes: "",
      project_id: 2,
      completed: false
    },
    {
      id: 3,
      description: "onthird",
      notes: "",
      project_id: 3,
      completed: false
    }
  ]);
};
