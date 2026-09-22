const express = require("express");

const app = express(); // Create an instance of the express application


// All Try to use try and catch method for error handling

app.get("/getUserData", (req, res) => {
 try{
    throw new Error("User Data Not Found");
    res.send("User Data Sent");
 }
 catch(error){
    res.status(500).send("Some Error Contact Support Team");
    next(error);
 }
});


app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("Something Went Wrong");
    }
}) 

// we have to call listen method to start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
