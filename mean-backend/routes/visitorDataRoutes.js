const express = require('express');
const router = express.Router();
const visitorDataController = require('./../controllers/visitorDataController');

router.post('/', visitorDataController.createVisitorData);
router.get('/', visitorDataController.getAllVisitorsData);
router.get('/:jakasData', visitorDataController.filterByDate);
router.put('/:_id', visitorDataController.editSingleVisitorData);
router.delete('/:_id', visitorDataController.removeSingleVisitorData);

module.exports = router;