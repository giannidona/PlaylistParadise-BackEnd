import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";

// import loginRouter from "./routes/loginRouter.js";
import RegisterRouter from "./routes/registerRouter.js";

const app = express();
const httpServer = app.listen(8080, () => console.log("http://localhost:8080"));
// const socketServer = new Server(httpServer);

mongoose.connect(
  "mongodb+srv://gianicraft:sGTKMldDiyRvK4ti@cluster0.miutuxt.mongodb.net/?retryWrites=true&w=majority"
);

app.use("/static", express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", handlebars.engine());
app.set("views", "./src/views");
app.set("view engine", "handlebars");

const registerRouter = new RegisterRouter();
app.use(registerRouter.getRouter());
