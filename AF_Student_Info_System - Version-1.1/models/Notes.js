const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    NoteDate:{
        type:String
    },
    NoteSub:{
        type:String
    },
    Note:{
        type:String
    },
    completed:{
        type:Boolean
    }

});

module.exports = mongoose.model('notes',UserSchema);
