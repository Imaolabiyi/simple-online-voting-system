// models/Feedback.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);

