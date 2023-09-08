const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.get('/getScore', gameController.getScore);
router.post('/updateScore', gameController.updateScore);

module.exports = router;
