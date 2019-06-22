const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Marks = new Schema({
    Subject:{
        type:String
    },
    regNo:{
        type:String
    },
    Marks:{
        type:String
    },
    completed:{
        type:Boolean
    }

});

module.exports = mongoose.model('Marks',Marks);
