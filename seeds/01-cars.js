
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        {VIN: 12345, make: 'BMW', model: 'V8', mileage: 321345},
        {VIN: 23456, make: 'Porche', model: '911', mileage: 89123, transmission: 'manual'},
        {VIN: 34567, make: 'BMW', model: 'V9', mileage: 3445, status: 'clean'}
      ]);
    });
};
