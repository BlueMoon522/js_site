import express from "express";
import User from "./models/user.models.js";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import noteRoutes from "./routes/notes.routes.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
// Enable CORS
app.use(cors());
app.use(express.json()); //to use req.body this is required,parses the json #middleware
console.log("jack");
app.use("/api/users", userRoutes);
app.use("/api/users", noteRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
