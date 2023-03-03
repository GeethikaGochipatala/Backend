var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },

        PhoneNumber: {
            type: Number,
            required: true}
        
});

module.exports = mongoose.model('user', userSchema);

