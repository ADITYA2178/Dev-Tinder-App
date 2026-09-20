const express = require("express");

const app = express(); // Create an instance of the express application

// RequestHandler
// app.use((req, res) => {
//    res.send("Hello From the Sever");
// });

//To give control over the particular route

app.use("/users", (req, res) => {
    res.send("Hello From the Users Routen Ankusha");
});

// we have to call listen method to start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

