const express = require('express');
const router = express.Router();
const { getAll, getOne, newItem } = require('../db/queries');

router.get('/', (req, res, next) => {
  getAll('coffee')
  .then(coffees => res.status(200).json({ status: 'success', data: coffees }))
  .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  getOne('coffee', req.params.id)
  .then(coffee => {
    if (coffee) {
      res.status(200).json({ status: 'success', data: coffee });
    } else {
      res.status(404).json({ status: '404', message: 'Coffee Not Found' });
    }
  })
  .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  res.json('hi!');
  // newItem('coffee', req.body)
})

module.exports = router;
