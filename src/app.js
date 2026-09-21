const express = require("express");

const app = express(); // Create an instance of the express application

app.get("/users", (req, res, next) => {
    // res.send("Hello From the Users Router Handling");
    next();
});

app.get("/users",(req,res,next)=> {
    res.send("Hello From the Users Router Handling 2");
})
 
// we have to call listen method to start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

