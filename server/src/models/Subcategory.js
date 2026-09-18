const mongoose = require("mongoose");

const subcategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Subcategory", subcategorySchema);