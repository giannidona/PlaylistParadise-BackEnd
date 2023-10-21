import express from "express";
import handlebars from "express-handlebars";

import loginRouter from "./routes/loginRouter.js";
import registerRouter from "./routes/registerRouter.js";

const app = express();
const httpServer = app.listen(8080, () => console.log("http://localhost:8080"));
// const socketServer = new Server(httpServer);

app.use("/static", express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", handlebars.engine());
app.set("views", "./src/views");
app.set("view engine", "handlebars");

app.use(loginRouter);
app.use(registerRouter);
