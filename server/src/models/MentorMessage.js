const mongoose = require("mongoose");

const mentorMessage = mongoose.Schema({
    message_id: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true
})

module.exports = mongoose.model("Message", mentorMessage)