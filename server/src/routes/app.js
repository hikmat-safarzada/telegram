const express = require("express");
const app = express();
const categoryRouter = require("./category.routes")
app.use(express.json())
app.use("/api/categories", categoryRouter)


module.exports = categoryRouter;