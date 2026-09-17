const dotenv = require("dotenv").config();
const express = require("express");
const { dbConnection } = require("./src/config/database");
const app = express();

dbConnection()
app.listen(8080, ()=>{
    console.log("System works")
})