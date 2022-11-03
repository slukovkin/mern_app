import Router from "express";
import { getme, login, register } from "../controllers/auth.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me",checkAuth, getme);

export default router;
