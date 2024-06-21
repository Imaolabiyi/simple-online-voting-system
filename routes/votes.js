const express = require('express');
const router = express.Router();
const Vote = require('../models/Vote');

// Get all votes
router.get('/', async (req, res) => {
    const results = await Vote.aggregate([
        { $group: { _id: '$option', count: { $sum: 1 } } }
    ]);
    res.status(200).json({ success: true, data: results });
});

module.exports = router;

