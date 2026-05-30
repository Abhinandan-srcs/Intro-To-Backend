import { Router } from "express";
import { loginUSer, logOutUser, registerUSer } from "../controllers/user.controller.js";
const router = Router();

router.route('/register').post(registerUSer);
router.route('/login').post(loginUSer);
router.route('/logout').post(logOutUser);

export default router;