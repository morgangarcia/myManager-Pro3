const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },

    file1: {
       type: Array,
       required: true,
    },
    file2: {
        type: Array,
        required: true,
     },
     file3: {
        type: Array,
        required: true,
     },
     textarea: {
      type: String,
     required: true,
     }
});
module.exports = Item = mongoose.model('model', ItemSchema);
