const router = require('express').Router();
const catchErros = require("../middlewares/catchErrors");
const { isAuth } = require('../middlewares/index');

const {
  newMuseum,
  getMuseum,
  updateMuseum
} = require('../controllers/museum.controller');

router.post('/new', isAuth, catchErros(newMuseum));
router.get('/:id', catchErros(getMuseum));
router.patch('/:id', catchErros(updateMuseum));

module.exports = router;