const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Musician = new Schema({
    id : {
        type: String,
        required: true,
        unique: true
    },
    firstName : {
        type: String,
        maxlength : 50,
        required: true
    },
    lastName : {
        type: String,
        maxlength : 50,
        required: true
    },
    genre: {
        type: String,
        enum :{values: ['JAZZ', 'ROCK' , 'BLUES']},
        required: true,
    },
    songs: {
        type: Array
    }
})

module.exports = mongoose.model("musician", Musician);