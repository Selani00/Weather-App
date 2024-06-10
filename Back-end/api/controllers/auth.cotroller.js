import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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
    return next(errorHandler(400, "All fields are required"));
  }

  //check if user if already exists from email
  const user = await User.findOne({email});
  if(user){
    return next(errorHandler(400, "User already exists, please sign in"));
  }
  // hash the password and confirmPassword
  const hashpassword = bcryptjs.hashSync(password, 12);

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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  //check the null values and empty strings
  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });

    //if user not found
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    //compare the password
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    //if password not matched
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }

    //generate token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    // hide the password from the response
    const { password: pass, ...rest } = validUser._doc;

    // send the response with cookie token
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
  } catch (err) {
    next(err);
  }
};

export const googleAuth = async (req, res, next) => {
  const { email, username } = req.body;

  try {
    // Find if the user exists
    const user = await User.findOne({ email });
    if (user) {
      //generate token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      // hide the password from the response
      const { password: pass, ...rest } = user._doc;

      // send the response with cookie token
      res
        .status(200)
        .cookie("access_token", token, { httpOnly: true })
        .json(rest);
    } else {
      //create random password
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);

      // hash the password
      const hashpassword = bcryptjs.hashSync(generatedPassword, 12);
      // create new user
      const newUser = User({
        username:username,
        email,
        password: hashpassword,
      });

      await newUser.save();

      //generate token
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, { httpOnly: true })
        .json(rest);
    }
  } catch (err) {
    next(err);
  }
};

export const signout = async (req, res, next) => {
  try {
    res.clearCookie("access_token").status(200).json("Signout successfully");
  } catch (err) {
    next(err);
  }
};
