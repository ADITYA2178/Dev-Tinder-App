const express = require("express");

const app = express(); // Create an instance of the express application

// RequestHandler
// app.use((req, res) => {
//    res.send("Hello From the Sever");
// });

//To give control over the particular route
app.use("/users", (req, res) => {
    res.send("Hello From the Users Router Handling HA HA HA  HA ");
});

// This will only handle the get Call to /User
app.get("/users", (req, res) => {
    res.send("Hello From the Users Ankusha Sabharwal");
});

app.post("/users", (req, res) => {
    res.send("Hello From the Users Ankusha Sabharwa and Saved in the Database");
});

app.delete("/users", (req, res) => {
    res.send("Hello From the Users Ankusha Sabharwal and Deleted from the Database");
});

//We can make the option in routing in by using "?"
app.get("/a{b}c" , (req, res) => {
    res.send("Hello From the Users Ankusha Sabharwal By using Param Routing Optional");
});

app.get("/checkUsername", (req, res) => {
    console.log(req.query.userId);
    res.send("Hello From the Users Ankusha Sabharwal and Checked the Username");
});

app.get("/checkUsername/:username", (req, res) => {
    console.log(req.params);
    res.send("Hello From the Users Ankusha Sabharwal and Checked the Username");
});




// we have to call listen method to start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

