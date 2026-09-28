const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:5
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        min:18,
        max:100,
    }, 
    gender:{
        type:String,
        validate(value){
         if(!["male","female","others"].includes(value)){
            throw new Error("Gender must be either male or female or others");
        }
    }},
    address:{
        type:String,
    },
    photoUrl:{
        type:String,
        default:"https://www.magnific.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_36332651.htm#fromView=keyword&page=1&position=0&uuid=50504d02-a27c-47e4-9272-46f13958a57f&track=ais_hybrid&query=Dummy+person"
    },
    about:{
        type:String,
        default:"This is a default about of the user",
    },
    skills:{
        type:[String],
    }
},{timestamps:true}); 

const User=mongoose.model("User",userSchema);

module.exports=User;