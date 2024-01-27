import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
import cors from "cors";

import sessionRoutes from "./routes/sessionRoutes.js";
import createPostRoutes from "./routes/createPostRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";

dotenv.config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const SECRET = process.env.SECRET;

const app = express();
app.listen(PORT || 2020, () => console.log(`http://localhost:${PORT}/login`));

mongoose.connect(MONGO_URL);

app.use(cors());
app.use("/static", express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: MONGO_URL,
      ttl: 2 * 60,
    }),
    secret: SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(sessionRoutes);
app.use(createPostRoutes);
app.use(homeRoutes);
