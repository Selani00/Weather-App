import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

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

app.use(cors({
  credentials:true,
  // need to change the origin to the front-end url
  origin: ['http://localhost:5173'],
  })
);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

//allow to send the data as a json to the server.
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// add error handling middleware
app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
      success: false,
      statusCode,
      message
  });
});
 
