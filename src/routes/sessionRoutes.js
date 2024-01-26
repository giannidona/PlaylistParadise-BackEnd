import { Router } from "express";
import userController from "../controllers/user/userController.js";

const router = Router();

router.get("/register");
router.post("/register", userController.register);

router.get("/login");
router.post("/login", userController.login);

export default router;
