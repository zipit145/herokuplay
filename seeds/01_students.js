
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, name: 'g4', age: 21},
        {id: 2, name: 'g42', age: 21},
        {id: 3, name: 'g43', age: 21}
      ]);
    });
};
