// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/simple_online_voting', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());

// Models
const Vote = require('./models/Vote');

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/votes', require('./routes/votes'));

// Handle votes and broadcast updates
app.post('/api/votes', async (req, res) => {
    const { option } = req.body;
    const newVote = new Vote({ option });
    await newVote.save();
    
    const results = await Vote.aggregate([
        { $group: { _id: '$option', count: { $sum: 1 } } }
    ]);

    io.emit('voteUpdate', results); // Emit updated results to all connected clients
    res.status(201).json({ success: true, data: results });
});

// Start the server
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running on port ${port}`));

