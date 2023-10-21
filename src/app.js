import express from "express";
import handlebars from "express-handlebars";

const app = express();
const httpServer = app.listen(8080, () => console.log("http://localhost:8080"));
const socketServer = new Server(httpServer);

app.use("/static", express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", handlebars.engine());
app.set("views", "./src/views");
app.set("view engine", "handlebars");
