import express from "express";
import {
  logInUser,
  logOutUser,
  registerUser,
} from "../controllers/userController.js";

export const router = express.Router();

router.post("/registeruser", registerUser);

router.post("/login", logInUser);

router.get("/logout", logOutUser);
