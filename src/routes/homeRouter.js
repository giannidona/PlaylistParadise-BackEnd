import baseRouter from "./baseRouter.js";
import postModel from "../dao/models/postModel.js";

export default class HomeRouter extends baseRouter {
  init() {
    this.get("/home", async (req, res) => {
      if (!req.session.isLogged) {
        return res.redirect("/login");
      }
      const posts = await postModel.find().populate("user").lean();
      const username = req.session.username;
      let edit = false;

      for (const post of posts) {
        post.edit = post.user._id.toString() === req.session.userId;
      }

      res.render("home", {
        posts,
        username,
        edit,
      });
    });
  }
}
