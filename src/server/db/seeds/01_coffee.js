
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffee').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('coffee').insert({
          name: 'House Blend',
          roaster: 'Folgers',
          origin: 'Hawaii',
          roast: 'Medium',
          caffeine: 145,
          decaf: false,
          price: 8
        }),
        knex('coffee').insert({
          name: 'Breakfast Blend',
          roaster: 'Maxwell House',
          origin: 'Kenya',
          roast: 'Light',
          caffeine: 160,
          decaf: false,
          price: 9
        }),
        knex('coffee').insert({
          name: 'Veranda Blend',
          roaster: 'Starbucks',
          origin: 'Latin America',
          roast: 'Blonde',
          caffeine: 220,
          decaf: false,
          price: 12
        }),
        knex('coffee').insert({
          name: 'Willow',
          roaster: 'Starbucks',
          origin: 'Asia',
          roast: 'Blonde',
          caffeine: 230,
          decaf: false,
          price: 13
        }),
        knex('coffee').insert({
          name: 'Tano Batak',
          roaster: 'Novo',
          origin: 'Sumatra',
          roast: 'Medium',
          caffeine: 180,
          decaf: false,
          price: 15
        }),
        knex('coffee').insert({
          name: 'Berlina',
          roaster: 'Pablo\'s Coffee',
          origin: 'Costa Rica',
          roast: 'Dark',
          caffeine: 190,
          decaf: false,
          price: 13
        }),
        knex('coffee').insert({
          name: 'Great Value',
          roaster: 'Walmart',
          origin: 'Dumpster',
          roast: 'Medium',
          caffeine: 105,
          decaf: true,
          price: 4
        }),
        knex('coffee').insert({
          name: 'Ndimaini',
          roaster: 'Pablo\'s Coffee',
          origin: 'Kenya',
          roast: 'Light',
          caffeine: 205,
          decaf: false,
          price: 15
        }),
        knex('coffee').insert({
          name: 'Kick Ass',
          roaster: 'Kicking Horse',
          origin: 'Indonesia',
          roast: 'Dark',
          caffeine: 175,
          decaf: false,
          price: 14
        }),
        knex('coffee').insert({
          name: 'Natural High',
          roaster: 'Kaldi\'s Coffee',
          origin: 'Latin America',
          roast: 'Light',
          caffeine: 10,
          decaf: true,
          price: 7
        })
      ]);
    });
};
