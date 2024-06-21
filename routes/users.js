const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register new user
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ success: true, message: 'User registered' });
});

// Login user
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
        res.status(200).json({ success: true, message: 'User logged in' });
    } else {
        res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
});

module.exports = router;

