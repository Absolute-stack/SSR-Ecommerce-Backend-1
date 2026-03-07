import express from "express";
import {
  register,
  login,
  refresh,
  logout,
  me,
} from "../controllers/authController.js";
import { protect } from "../middleware/protect.js";

export const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.get("/refresh", refresh);
authRouter.delete("/logout", logout);
authRouter.post("/register", register);
authRouter.post("/me", protect, me);
