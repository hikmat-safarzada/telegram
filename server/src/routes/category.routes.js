const express = require("express");
const getCategory = require("../controllers/category.controller");
const router = express.Router();
router.get("/", getCategory)

module.exports = router