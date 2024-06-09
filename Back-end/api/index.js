import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import functions from "firebase-functions";

// Import routes

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
  origin: ['http://localhost:5173'],
  })
);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

//allow to send the data as a json to the server.
app.use(express.json());

// Log incoming requests for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

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

export const api = functions.https.onRequest(app);
 
