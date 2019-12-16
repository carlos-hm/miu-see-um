const router = require('express').Router();
const catchErrors = require("../middlewares/catchErrors");

const {
  newHall,
  getHall,
  getHalls,
  updateHall,
  deleteHall
} = require('../controllers/hall.controller');

router.post('/:id/new', catchErrors(newHall));
router.get('/one/:id', catchErrors(getHall));
router.get('/:id', catchErrors(getHalls));
router.patch('/:id', catchErrors(updateHall));
router.delete('/:id', catchErrors(deleteHall));

module.exports = router;