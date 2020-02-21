
exports.up = function(knex) {
    return knex.schema.createTable('resourses', tbl => {
        // creates a primary key called id
        tbl.increments();
        // creates a text field called name which is both required and unique
        tbl.text('name', 128).unique().notNullable();
        // creates a numeric field called budget which is required
        tbl.text('description');
      });
};

// - [ ] a unique ID.
// - [ ] a name. This column is required.
// - [ ] a description.

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resourses');
};
