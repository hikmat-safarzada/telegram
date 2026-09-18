const mongoose = require("mongoose");

const mentorProgress = mongoose.Schema({
    liked_count: {
        type: Number,
        required: true
    },
    progress: {
        type: Number,
        required: true
    },
    current_message: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Progress", mentorProgress)