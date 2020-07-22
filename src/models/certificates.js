const mongoose = require('mongoose');
const Certificates = mongoose.model('Certifactes',{
    courseName:{
        type:String,
        required:true
    },

    courseDescription:{
        type:String,
        required:true
        
    }

});

module.exports = Certificates;