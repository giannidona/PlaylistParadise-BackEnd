import baseRouter from "./baseRouter.js";
import userModel from "../dao/models/userModel.js";

export default class LoginRouter extends baseRouter {
  init() {
    this.get("/login", async (req, res) => {
      res.render("login");
    });

    this.post("/login", async (req, res) => {
      try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username, password }).lean();
        console.log(user);
        res.redirect("home");
      } catch (error) {
        res.send(error);
      }
    });
  }
}
