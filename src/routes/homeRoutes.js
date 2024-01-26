import { Router } from "express";

const router = Router();

router.get("/home", async (req, res) => {
  res.json("hello");
});

export default router;
