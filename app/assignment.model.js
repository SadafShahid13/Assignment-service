const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    assigment:{
        type: String,
        required: true
    },

    class:{
        type: String,
        required: true
    },

    datePosted:{
        type: Date,
        default: Date.now
    },

    dateOfSubmission:{
        type: Date,
        required: true
    }

});

const assignments = mongoose.model('assignments', schema);

module.exports = assignments;
