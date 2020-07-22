const mongoose = require('mongoose');
try{
     mongoose.connect('mongodb://127.0.0.1:27017/cv-manager2-api',{useNewUrlParser:true,useCreateIndex:true,useFindAndModify:false,useUnifiedTopology:true})
    console.log('connected');
} catch(error){
    console.log(error);
}