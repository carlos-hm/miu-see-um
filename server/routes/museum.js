const router = require('express').Router();
const catchErrors = require("../middlewares/catchErrors");
const { isAuth } = require('../middlewares/index');
const uploadPhoto = require('../config/cloudinary');

const {
  newMuseum,
  getMuseum,
  getMuseums,
  updateMuseum,
  getUserMuseum
} = require('../controllers/museum.controller');

//router.post('/new', isAuth, catchErros(newMuseum));
router.get('/:id', catchErrors(getMuseum));
router.patch('/:id', uploadPhoto.single("photoURL"), catchErrors(updateMuseum));
router.get('/profile/:id', catchErrors(getUserMuseum));

module.exports = router;