const mongoose = require('mongoose');

const cloudSchema = new mongoose.Schema({
    name: String,
    password: String,
    data: String,
    todo:
        [{
            date: Date,
            data: String,
            checked: Boolean
        }]
});

module.exports = mongoose.model('users', cloudSchema);