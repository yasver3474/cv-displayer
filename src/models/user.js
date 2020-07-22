const mongoose = require('mongoose');
const validator = require('validator');
const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    location:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(v) {
            if(!validator.isEmail(v)){
                throw new Error('Invalid Email ID');
            }

        },
        lowercase:true


    },
    phoneNo:{
        type:String,
        required:true,
        validate(value){
            if(value.length!=10){
                throw new Error('Invalid Phone Number')
            }
        }

    }
});


module.exports = User;