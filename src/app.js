const express = require("express");
const path=require("./config/database");
const connectDB=require("./config/database");

const app = express(); // Create an instance of the express application
const User=require("./Models/user");

app.use(express.json()); //it is middleware to parse the incoming request body in JSON format and convert it into a JavaScript object

app.post("/signup", async (req, res) => {
  
    const user = new User(req.body);
    try{
        await user.save();
        res.send("User Added successfully!");
    }catch(error){
        res.status(500).send("User creation failed");
    }
});


// Here First we have established the connection to the database and then we have started the server
connectDB().then(()=>{
    console.log("Database Connected Successfully");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch((error)=>{
    console.log("Database Connection Failed", error);
});


