const express = require("express");

const app = express(); // Create an instance of the express application

app.use("/users", (req, res,next) => {
    res.send("Hello From the Users Router Handling");
    next();
},
(req, res) => {
    res.send("Hello From the Users Router Handling 2");
},
(req, res) => {
    res.send("Hello From the Users Router Handling 3");
},
(req, res) => {
    res.send("Hello From the Users Router Handling 4");
},
(req, res) => {
    res.send("Hello From the Users Router Handling 5");
},
(req, res) => {
    res.send("Hello From the Users Router Handling 6");
},
(req, res) => {
    res.send("Hello From the Users Router Handling 7");
},
);
 
// we have to call listen method to start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

