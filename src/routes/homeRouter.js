import baseRouter from "./baseRouter.js";
import postModel from "../dao/models/postModel.js";

export default class HomeRouter extends baseRouter {
  init() {
    this.get("/home", async (req, res) => {
      const post = await postModel.find().lean();
      res.render("home", { post });
    });
  }
}
