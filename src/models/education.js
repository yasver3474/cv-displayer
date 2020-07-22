const mongoose = require('mongoose');
const Education = mongoose.model('Education',{
    level:{
        type:String,
        required:true
    },
    instituteName:{
        type:String,
        required:true
    },
    startYear:{
        type:Date,
        
    },
    endDate:{
        type:Date,


    },
    gradePoint:{
        type:String,
        required:true
    }

});

module.exports = Education;