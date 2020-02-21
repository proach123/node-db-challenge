
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        // creates a primary key called id
        tbl.increments();
        // creates a text field called name which is both required and unique
        tbl.text('name', 128).unique().notNullable();
        // creates a numeric field called budget which is required
        tbl.text('description');
        tbl.boolean('completed').defaultTo(false).notNullable();
      });
};


// - [ ] a unique ID.
// - [ ] a name. This column is required.
// - [ ] a description.
// - [ ] a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be `false`.

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
};
