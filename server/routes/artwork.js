const router = require('express').Router();
const catchErros = require("../middlewares/catchErrors");

const {
  newArtwork,
  getArtwork,
  updateArtwork,
  deleteArtwork
} = require('../controllers/artwork.controller');

router.post('/:id/new', catchErros(newArtwork));
router.get('/:id', catchErros(getArtwork));
router.patch('/:id', catchErros(updateArtwork));
router.delete('/:id', catchErros(deleteArtwork));

module.exports = router;
