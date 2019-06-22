const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    Subject:{
        type:String
    },
    RegNo:{
        type:String
    },
    Marks:{
        type:String
    },
    completed:{
        type:Boolean
    }

});

module.exports = mongoose.model('marks',UserSchema);
