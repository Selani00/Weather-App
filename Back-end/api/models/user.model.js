import e from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true,
        
    },
    email: {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type : String,
        required : true
    },
    
},{timestamps : true});
// To store the time of creation

const User = mongoose.model("User", userSchema);

export default User;