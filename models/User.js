// models/User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);

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

