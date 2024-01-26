import { Router } from "express";
import postController from "../controllers/post/postController.js";

const router = Router();

router.get("/create");
router.post("/create", postController.createPost);

export default router;