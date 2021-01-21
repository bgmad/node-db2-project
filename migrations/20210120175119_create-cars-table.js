
exports.up = function(knex) {
    // the change we want to make to our schema
    return knex.schema.createTable('car-dealer', tbl => {
        tbl.increments();
        tbl.integer('VIN')
            .unique()
            .notNullable();
        tbl.text('make')
            .notNullable();
        tbl.text('model')
            .notNullable();
        tbl.decimal('mileage')
            .notNullable();

        tbl.text('transmission');
        tbl.text('status');
    });
};

exports.down = function(knex) {
    // undoing that change
    return knex.schema.dropTableIfExists('car-dealer');
};
