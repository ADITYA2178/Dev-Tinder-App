const express = require("express");

const app = express(); // Create an instance of the express application

const { adminAuth, userAuth } = require("./middleware/auth");


app.use("/admin",adminAuth);
app.use("/user",userAuth);

app.get("/admin/getAllData", (req, res) => {
    res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
    //Logic of checking if the user is authenticated
    res.send("User Deleted");
});

app.get("/user/getAllData",userAuth, (req, res) => {
    res.send("All Data Sent");
});

// we have to call listen method to start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
