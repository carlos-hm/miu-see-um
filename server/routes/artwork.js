const router = require('express').Router();
const catchErrors = require("../middlewares/catchErrors");
const uploadPhoto = require('../config/cloudinary');

const {
  newArtwork,
  getArtwork,
  updateArtwork,
  deleteArtwork
} = require('../controllers/artwork.controller');

router.post('/:id/new', uploadPhoto.single("photoURL"), catchErrors(newArtwork));
router.get('/:id', catchErrors(getArtwork));
router.patch('/:id', uploadPhoto.single("photoURL"), catchErrors(updateArtwork));
router.delete('/:id', catchErrors(deleteArtwork));

module.exports = router;
