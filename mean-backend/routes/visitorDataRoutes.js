const express = require('express');
const router = express.Router();
const visitorDataController = require('./../controllers/visitorDataController');

router.post('/', visitorDataController.createVisitorData);

module.exports = router;