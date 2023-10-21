import { Router } from "express";

const router = Router();

router.get("/register", async (req, res) => {
  res.render("register");
});

export default router;
