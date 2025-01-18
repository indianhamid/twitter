import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse req.body for signup & ...

app.use(express.urlencoded({ extended: true })); // to parse form data

app.use(cookieParser()); // to parse token of cookie

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ...`);
  connectMongoDB();
});
