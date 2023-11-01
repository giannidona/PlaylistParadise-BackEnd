import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import session from "express-session";
import methodOverride from "method-override";
import dotenv from "dotenv";

import LoginRouter from "./routes/loginRouter.js";
import RegisterRouter from "./routes/registerRouter.js";
import HomeRouter from "./routes/homeRouter.js";
import PostRouter from "./routes/postRouter.js";
import ProfileRouter from "./routes/profileRouter.js";

dotenv.config();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const SESSION_SECRET = process.env.SESSION_SECRET;

const app = express();
const httpServer = app.listen(PORT || 2020, () =>
  console.log(`http://localhost:${PORT}/login`)
);

mongoose.connect(MONGODB_URL);

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: MONGODB_URL,
      ttl: 100,
    }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/static", express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("handlebars", handlebars.engine());
app.set("views", "./src/views");
app.set("view engine", "handlebars");

const registerRouter = new RegisterRouter();
app.use(registerRouter.getRouter());

const loginRouter = new LoginRouter();
app.use(loginRouter.getRouter());

const homeRouter = new HomeRouter();
app.use(homeRouter.getRouter());

const postRouter = new PostRouter();
app.use(postRouter.getRouter());

const profileRouter = new ProfileRouter();
app.use(profileRouter.getRouter());
