const express = require('express');

const router = express.Router();

const controllers = require('../controllers/hotels');

router.route('/')
  .get(controllers.getHotels)
  .post(controllers.addHotel);

router.route('/:id')
  .put(controllers.updateHotel)
  .delete(controllers.deleteHotel);

module.exports = router;
