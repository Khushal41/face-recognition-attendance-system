const express = require('express');
const RecognizeController = require('../controllers/recognizeController');

const router = express.Router();
const recognizeController = new RecognizeController();

router.post('/', recognizeController.recognizeUser);

module.exports = router;