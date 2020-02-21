const db = require("../data/db-config.js");


module.exports = {
    findResourses,
    addResourses,
}

function findResourses() {
    return db("resourses");
  }

  function addResourses(resourse) {
    return db("resourses").insert(resourse, "id");
  }
//   - [x] adding resources.
//   - [x] retrieving a list of resources.