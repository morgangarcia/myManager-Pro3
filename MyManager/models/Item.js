const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },


    email: {
        type: String,
        required: true
    },


    password: {
        type: String,
        required: true
    },



    taxform: {
        type: String,

    },
    invoice: {
        type: String,

    },
    rider: {
        type: String,

    },
    makeOffer: {
        type: String,
        required: false,
    }
});
module.exports = Item = mongoose.model("items", ItemSchema);
