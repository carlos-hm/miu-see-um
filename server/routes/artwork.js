const router = require('express').Router();
const catchErrors = require("../middlewares/catchErrors");

const {
  newArtwork,
  getArtwork,
  updateArtwork,
  deleteArtwork
} = require('../controllers/artwork.controller');

router.post('/:id/new', catchErrors(newArtwork));
router.get('/:id', catchErrors(getArtwork));
router.patch('/:id', catchErrors(updateArtwork));
router.delete('/:id', catchErrors(deleteArtwork));

module.exports = router;
