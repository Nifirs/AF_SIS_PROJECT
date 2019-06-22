const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Course = new Schema({
    Date:{
        type:String
    },
    Subject:{
        type:String
    },
    Note:{
        type:String
    },
    completed:{
        type:Boolean
    }

});

module.exports = mongoose.model('Course',Course);
