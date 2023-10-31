import baseRouter from "./baseRouter.js";
import { uploader } from "../middlewares/multer.js";
import userModel from "../dao/models/userModel.js";

export default class RegisterRouter extends baseRouter {
  init() {
    this.get("/register", async (req, res) => {
      if (req.session.isLogged) {
        return res.redirect("/home");
      }
      res.render("register");
    });

    this.post("/register", uploader.single("file"), async (req, res) => {
      try {
        const { username, email, password } = req.body;
        const profile_image = req.file.originalname;
        const newUser = await userModel.create({
          username,
          email,
          password,
          profile_image,
        });

        console.log(newUser);
        res.redirect("/home");
      } catch (error) {
        res.send(error);
      }
    });
  }
}
