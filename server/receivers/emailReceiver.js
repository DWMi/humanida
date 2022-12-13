import express from "express";
import { saveEmail } from "../controllers/emailController.js";

export const router = express.Router();

router.post("/save", saveEmail);
