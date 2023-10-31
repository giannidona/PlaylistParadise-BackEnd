import baseRouter from "./baseRouter.js";
import userModel from "../dao/models/userModel.js";

export default class LoginRouter extends baseRouter {
  init() {
    this.get("/login", async (req, res) => {
      if (req.session.isLogged) {
        return res.redirect("/home");
      }
      res.render("login");
    });

    this.post("/login", async (req, res) => {
      try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username, password }).lean();

        req.session.username = user.username;
        req.session.image = user.profile_image;
        req.session.userId = user._id;
        req.session.isLogged = true;

        res.redirect("/home");
      } catch (error) {
        res.send(error);
      }
    });
  }
}
