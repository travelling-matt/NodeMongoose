//require  mongoose from mongoose
//npm i mongoose
const mongoose = require("mongoose");

//require built in library 'dotenv'
//npm i dotenv
//.config() allows us to share this with rest of app
require("dotenv").config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("successful database connection");
    } catch (error) {
        console.log(error);
    }
};

connection();
