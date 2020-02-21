const db = require("../data/db-config.js");

module.exports = {
  findProjects,
  findProjectsById,
  addProject,
  findTask,
  addTask
};

function findProjects() {
    return db("projects");
  }

function findProjectsById(id) {
    return db("projects")
      .where({ id })
      .first();
}

function addProject(project) {
    return db("projects").insert(project, "id");
  }
//   - [x] adding projects.
//   - [x] retrieving a list of projects.



  function findTask(id) {
    return db("projects").select('projects.name','projects.description','tasks.*')
    .join("tasks",{'projects.id': 'tasks.id'})
    .where({"tasks.id":id})
  }

  function addTask(task,id) {
    return db("tasks").insert(task,"id");
  }