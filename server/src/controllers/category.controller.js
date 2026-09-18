const {getCategories} = require("../services/category.service")
const getCategory = async (req, res) => {
    try {
        const categories = await getCategories();
        res.status(200).json({
            categories
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
module.exports = getCategory