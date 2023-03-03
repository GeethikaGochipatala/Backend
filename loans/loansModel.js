 


 



 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var userSchema = new Schema({

    //  LoanNumber: {
    //      type: Number,
    //      required: true
    //  },
     LoanType: {
         type: String,
         required: true
     },
     BorrowerName: {
         type: String,
         required: true
     },
     Amount:{
     type: Number,
     required: true
     }
 });

 module.exports = mongoose.model('users', userSchema);



 