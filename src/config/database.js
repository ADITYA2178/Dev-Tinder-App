const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


const connectDB = async () => {
await mongoose.connect(process.env.MONGO_URI);
}

connectDB().then(()=>{
    console.log("Database Connected Successfully");
}).catch((error)=>{
    console.log("Database Connection Failed", error);
});

module.exports = connectDB;
