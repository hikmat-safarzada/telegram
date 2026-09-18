const mongoose = require("mongoose");

const mentorPreference = mongoose.Schema({
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    subcategory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcategory",
        required: true
    },
    push_time: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true
})

module.exports = mongoose.model("Preference", mentorPreference)