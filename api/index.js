import express from "express";
import authRouter from "./routes/auth.route.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectToDatabase from "./db.js";

dotenv.config();

const app = express();

connectToDatabase()
  .then(() => {
    console.log("Database connection established");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

app.use(bodyParser.json());
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log(`Server is running on PORT ${3000}`);
});
