const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    }


    // email: {
    //     type: String,
    //     required: true
    // }


    // password: {
    //     type: String,
    //     required: true
    // },



    // taxdoc: {
    //     type: {},

    // },
    // invoice: {
    //     type: {},

    // },
    // rider: {
    //     type: {},

    // },
    // textarea: {
    //     type: String,
    //     required: false,
    // }
});
module.exports = Item = mongoose.model("item", ItemSchema);
