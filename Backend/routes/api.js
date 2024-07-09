const express = require('express');
const router = express.Router();
const { getTransactions, getStatistics, getBarChartData, getPieChartData, getCombinedData } = require('../controllers/apiController');

router.get('/transactions', getTransactions);
router.get('/statistics', getStatistics);
router.get('/bar-chart', getBarChartData);
router.get('/pie-chart', getPieChartData);
router.get('/combined-data', getCombinedData);

module.exports = router;
