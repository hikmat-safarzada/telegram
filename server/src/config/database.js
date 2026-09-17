const mongoose = require("mongoose");
const {config} = require("./config")
const dbConnection = async () => {
    try {
        const connection = await mongoose.connect(config.mongo_url.replace("<db_password>", config.mongo_pass))
        console.log("Db connected successfully")
    } catch (error) {
        console.log("Db connection failed: ", error)
    }
}

module.exports = {dbConnection}