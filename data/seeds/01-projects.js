exports.seed = function(knex) {
  return knex("projects").insert([
    { id: 1, name: "first", description: "does", completed: false },
    { id: 2, name: "second", description: "fourth", completed: false },
    { id: 3, name: "third", description: "fail", completed: false },
    { id: 4, name: "fourth" }
  ]);
};
