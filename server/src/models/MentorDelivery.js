const mongoose = require("mongoose");

const mentorDelivery = mongoose.Schema({
    sent_at: {
        type: Date,
        required: true
    },
    action: {
        type: String,
        enum: ["LIKE", "OTHER", "NONE"],
        required: true
    }
}, 
{
    timestamps: true
})

module.exports = mongoose.model("Delivery", mentorDelivery);