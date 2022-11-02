import Router from "express";
import { getMe, login, register } from "../controllers/auth.js";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
} from "../controllers/user_controller.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = Router();
router.post("/user", createUser);
router.post("/user/search", getUser);
router.get("/user", getAllUser);
router.delete("/user", deleteUser);
router.post("/register", register);
router.post("/login", login);
router.get("/me", checkAuth, getMe);

export default router;
