// models/Vote.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
    option: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Vote', VoteSchema);

