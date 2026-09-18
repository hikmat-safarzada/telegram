const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    telegramId: {
        type: String,
        required: true,
        unique: true
    },
    timezone: {
        type: String,
        default: "Asia/Baku"
    }
}, 
{
    timestamps : true
})
module.exports = mongoose.model("User", userSchema)