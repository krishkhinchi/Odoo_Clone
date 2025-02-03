const mongoose = require('mongoose');
require('dotenv').config()
const uri = process.env.DB_URI

function connectDB(){
    mongoose
        .connect(uri)
        .then(()=>console.log("MongoDB connected successfully"))
        .catch((err)=>console.log("Connection error to MongoDB",err))
}

module.exports = connectDB;