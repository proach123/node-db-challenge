
exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl => {
        // creates a primary key called id
        tbl.increments();
        tbl.text('todo', 128).notNullable();
        tbl.text('notes');
        tbl.boolean('task-completed').defaultTo(false).notNullable();
      });
};


// - [ ] a unique ID.
// - [ ] a description of what needs to be done. This column is required.
// - [ ] a notes column to add additional information.
// - [ ] a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be `false`.


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
};



