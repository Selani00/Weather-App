import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/user.route.js";

dotenv.config();

// Connect to database
mongoose
  .connect(
    process.env.MONGO
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

// Create express app
const app = express();

app.use('/api/user', userRouter);
 
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
