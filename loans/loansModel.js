var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    loantype: {
        type: String,
        required: true
    },
    borrowername: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('loans', userSchema);



