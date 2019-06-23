const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Courseee = new Schema({
    coursename:{
        type:String
    },
    courseId:{
        type:String
    },
    courseDur:{
        type:String
    },

    courseFee:{
        type:String
    }
});

module.exports = mongoose.model('Course',Courseee);
