import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.listen(PORT || 2020, () => console.log(`http://localhost:${PORT}/login`));

mongoose.connect(MONGO_URL);

app.use("/static", express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
