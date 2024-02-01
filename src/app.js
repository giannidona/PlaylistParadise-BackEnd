import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

import homeRoutes from "./routes/homeRoutes.js";
import createPostRoutes from "./routes/createPostRoutes.js";

dotenv.config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.listen(PORT || 2020, () => console.log(`http://localhost:${PORT}/login`));

mongoose.connect(MONGO_URL);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use("/static", express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(homeRoutes);
app.use(createPostRoutes);
