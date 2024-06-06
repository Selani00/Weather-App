import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  //check the null values and empty strings
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    //use middleware to handle the error
    next(errorHandler(400, "All fields are required"));
  }

  // hash the password and confirmPassword
  const hashpassword = await bcryptjs.hash(password, 12);

  // create new user
  const newUser = new User({
    username,
    email,
    password: hashpassword,
  });

  // save user and return response
  try {
    await newUser.save();
    res.json("User created successfully");
  } catch (err) {
    //use middleware to handle the error
    next(err);
  }
};
