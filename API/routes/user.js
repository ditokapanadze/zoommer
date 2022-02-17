import express from "express";
import { registerUser, signIn, ttt } from "../controllers/user.js";
import verifyToken from "../Middleware/verifyToken.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/signin", signIn);
router.get("/test", verifyToken, ttt);
export default router;
