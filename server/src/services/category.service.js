const Category = require("../models/Category")
const getCategories = async () => {
    return await Category.find()
}

module.exports = {getCategories}