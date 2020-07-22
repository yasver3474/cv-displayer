const mongoose = require('mongoose');
const Projects = mongoose.model('Project',{
    name:{
        type:String,
        required:true
    },
    descrpition:{
        type:String,
        reqired:true
    }
});

module.exports = Projects;