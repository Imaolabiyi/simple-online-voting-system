// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/simple_online_voting', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Models
const Vote = require('./models/Vote');
const User = require('./models/User');
const Feedback = require('./models/Feedback'); // Add feedback model

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/votes', require('./routes/votes'));

// Serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/vote', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'vote.html'));
});

app.get('/results', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'results.html'));
});

app.get('/logout', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'logout.html'));
});

app.get('/feedback', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'feedback.html'));
});

// Handle feedback form submission
app.post('/submit_feedback', async (req, res) => {
    const { user_id, feedback } = req.body;
    const newFeedback = new Feedback({ user_id, feedback });
    await newFeedback.save();
    res.status(201).json({ success: true, message: 'Feedback submitted' });
});

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

