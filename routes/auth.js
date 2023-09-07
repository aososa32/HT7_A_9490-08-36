const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/:DPI', authController.login);

module.exports = router;
