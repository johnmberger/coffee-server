const express = require('express');
const router = express.Router();
const { getAll, getOne } = require('../db/queries');

router.get('/', (req, res, next) => {
  getAll('coffee')
  .then(coffees => res.status(200).json({ status: 'success', data: coffees }))
  .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  getOne('coffee', req.params.id)
  .then(coffee => res.status(200).json({ status: 'success', data: coffee }))
  .catch(err => next(err));
});

module.exports = router;
