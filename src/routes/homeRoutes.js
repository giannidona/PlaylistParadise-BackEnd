import { Router } from "express";
import homeController from "../controllers/homeController.js";

const router = Router();

router.get("/", homeController.getPosts);

export default router;
