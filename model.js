const mongoose = require('mongoose');

const rg = new mongoose.Schema({
    rg: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('rg', rg);