const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connection = mongoose.connect("mongodb+srv://hrusikeshviroot:hrusikesh@cluster0.1rit8qf.mongodb.net/search")

module.exports={connection}