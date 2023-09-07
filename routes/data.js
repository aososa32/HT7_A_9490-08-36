const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/', verifyToken, dataController.getData);

module.exports = router;
