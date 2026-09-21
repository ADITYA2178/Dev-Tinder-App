const express = require("express");

const app = express(); // Create an instance of the express application


app.get("/admin/getAllData", (req, res) => {
    //Logic of checking if the user is authenticated
    const token = "xyz";
    const isAuthenticated = token === "xyz";
    if (!isAuthenticated) {
        res.status(401).send("Unauthorized");
        return;
    }
    res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
    //Logic of checking if the user is authenticated
    res.send("User Deleted");
});

// we have to call listen method to start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
