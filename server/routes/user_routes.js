import Router from "express";
import {createUser, deleteUser, getAllUser, getUser} from "../controllers/user_controller.js";

const router = Router();
router.post("/user", createUser);
router.post('/user/search', getUser)
router.get('/user', getAllUser)
router.delete('/user', deleteUser)

export default router;
