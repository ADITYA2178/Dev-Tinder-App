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


// Get User by email 
app.get("/user",async(req,res)=>{
    const firstName=req.body.firstName;
    const user=await User.find({firstName});

    try{
        if (!user) {
            res.status(404).send("User not found");
          } else { 
            res.send(user);
        }
    }
    catch(error){
        res.status(500).send("Internal server error");
    }
})

//Feed Api
app.get("/feed",async(req,res)=>{
    const user=await User.find({});
    try{
        if(user.length === 0){
            res.status(404).send("No users found");
        }else{
            res.send(user);
        }
    }catch(error){
        res.status(500).send("Internal server error");
    }
});


// To DELETE THE USER BY FINDING THE ID 
app.delete("/user/remove",async(req,res)=>{
    const userId=req.body.userId;
    // const user=await User.findByIdAndDelete(id);
    const user=await User.findByIdAndDelete({userId:id});
    try{
        if(!user){
            res.status(404).send("User not found");
        }else{
            res.send("User deleted successfully");
        }
    }catch(error){
        res.status(500).send("Internal server error");
    }
});

// To UPDATE THE USER 
app.patch("/user/update",async(req,res)=>{
    const id=req.body.id;
    const user=await User.findByIdAndUpdate(id,{firstName:req.body.firstName,email:req.body.email});
    try{
        if(!user){
            res.status(404).send("User not found");
        }else{
            res.send("User updated successfully");
        }
    }catch(error){
        res.status(500).send("Internal server error");
    }
}); 

app.patch("/user/updatebyEmailid",async(req,res)=>{
    const email=req.body.email;
    const user=await User.findOneAndUpdate({email:email},{firstName:req.body.firstName});
    try{
        if(!user){
            res.status(404).send("User not found");
        }else{
            res.send("User updated successfully");
        }

    }catch(error){
        res.status(500).send("Internal server error");
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


