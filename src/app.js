import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import session from "express-session";
import methodOverride from "method-override";

import LoginRouter from "./routes/loginRouter.js";
import RegisterRouter from "./routes/registerRouter.js";
import HomeRouter from "./routes/homeRouter.js";
import PostRouter from "./routes/postRouter.js";

const app = express();
const httpServer = app.listen(8080, () =>
  console.log("http://localhost:8080/login")
);
// const socketServer = new Server(httpServer);

mongoose.connect(
  "mongodb+srv://gianicraft:sGTKMldDiyRvK4ti@cluster0.miutuxt.mongodb.net/?retryWrites=true&w=majority"
);

app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://gianicraft:sGTKMldDiyRvK4ti@cluster0.miutuxt.mongodb.net/?retryWrites=true&w=majority",
      ttl: 100,
    }),
    secret: "aawd89n=02a-w92",
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
