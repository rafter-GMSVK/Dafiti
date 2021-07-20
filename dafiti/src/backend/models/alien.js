const mongoose = require('mongoose');


const alienSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    pic: {
        type: String,
    }

})

module.exports = mongoose.model('Alien', alienSchema);