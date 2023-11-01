import baseRouter from "./baseRouter.js";

export default class HomeRouter extends baseRouter {
  init() {
    this.get("/profile", async (req, res) => {
      if (!req.session.isLogged) {
        return res.redirect("/login");
      }

      const username = req.session.username;
      const email = req.session.email;
      const profile_image = req.session.image;
      console.log(profile_image);

      res.render("profile", {
        username,
        email,
        profile_image,
      });
    });

    this.get("/logout", (req, res) => {
      req.session.destroy();
      res.redirect("/login");
    });
  }
}
