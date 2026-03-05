import express from "express";
import {
  register,
  login,
  refresh,
  logout,
} from "../controllers/authController.js";

export const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.get("/refresh", refresh);
authRouter.delete("/logout", logout);
authRouter.post("/register", register);
