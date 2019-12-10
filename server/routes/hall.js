const router = require('express').Router();
const catchErrors = require("../middlewares/catchErrors");

const {
  newHall,
  getHall,
  updateHall,
  deleteHall
} = require('../controllers/hall.controller');

router.post('/:id/new', catchErrors(newHall));
router.get('/:id', catchErrors(getHall));
router.patch('/:id', catchErrors(updateHall));
router.post('/:id', catchErrors(deleteHall));

module.exports = router;