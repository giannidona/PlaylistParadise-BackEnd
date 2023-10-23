import baseRouter from "./baseRouter.js";
import { uploader } from "../middlewares/multer.js";
import postModel from "../dao/models/postModel.js";

export default class PostRouter extends baseRouter {
  init() {
    this.get("/createpost", async (req, res) => {
      res.render("createpost");
    });

    this.post("/createpost", uploader.single("file"), async (req, res) => {
      try {
        const { title, description } = req.body;
        const post_image = req.file.originalname;
        const newPost = await postModel.create({
          title,
          description,
          post_image,
        });
        console.log(newPost);
        res.redirect("/home");
      } catch (error) {
        res.send(error);
      }
    });
  }
}
