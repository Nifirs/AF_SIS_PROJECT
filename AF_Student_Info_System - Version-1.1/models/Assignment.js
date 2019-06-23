const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Asin = new Schema({
    Subject:{
        type:String
    },
    regNo:{
        type:String
    },
    Link:{
        type:String
    },
    completed:{
        type:Boolean
    }

});

module.exports = mongoose.model('assignments',Asin);