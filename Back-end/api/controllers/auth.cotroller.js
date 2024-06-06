import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async(req, res) => {
    const { username, email, password } = req.body;

    //check the null values and empty strings
    if (!username || !email || !password || username === "" || email === "" || password === "" ) {
        return res.status(400).json({ message: "All fields are required" });
    }
    

    // hash the password and confirmPassword
    const hashpassword = await bcryptjs.hash(password, 12);
    

    // create new user
    const newUser = new User({
        username,
        email,
        password : hashpassword,
        
    });

    
    // save user and return response
    try{
        await newUser.save();
    res.json("User created successfully")

    }catch(err){
        return res.status(500).json({ message:err.message });
    }
    


};

