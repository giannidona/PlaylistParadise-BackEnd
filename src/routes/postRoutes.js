import { Router } from "express";
import postController from "../controllers/postController.js";

const router = Router();

router.post("/create", postController.createPost);
router.post("/delete/:pid", postController.deletePost);

export default router;
