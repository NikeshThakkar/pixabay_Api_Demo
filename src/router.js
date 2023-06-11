const express = require('express');
const router = express.Router();
const imagesController = require('./controller/imageController');

// main routers for controller
router.use("/images", imagesController);

module.exports = router;