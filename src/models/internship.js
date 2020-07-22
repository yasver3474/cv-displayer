const mongoose = require('mongoose');
const Internship = mongoose.model('Internship',{
    role:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,


    },
    roleDescription:{
        type:String,
        required:true
    }

});

module.exports = Internship;