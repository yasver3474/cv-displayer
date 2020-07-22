const mongoose = require('mongoose');
const Misc = mongoose.model('Misc',{
    skill:{
        type:[String],
    },

    skillLevel:{
        type:[String],
        
    },
    languages:{
        type:[String]
    },
    languageLevel:{
        type:[String]
    },
    interests:{
        type:[String]
    },
    achievements:{
        type:[String]
    }


});

module.exports = Misc;