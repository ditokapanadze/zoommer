import express from "express";
import {
  registerUser,
  signIn,
  generateRessetToken,
  resetPassword,
} from "../controllers/user.js";
import verifyToken from "../Middleware/verifyToken.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/signin", signIn);
router.post("/generatetoken", verifyToken, generateRessetToken);
router.put("/passwordreset/:token", verifyToken, resetPassword);
export default router;
