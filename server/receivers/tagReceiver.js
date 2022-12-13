import express from "express";
import {
  getAllTags,
  getNotConnected,
  getUsers,
} from "../controllers/tagController.js";

export const router = express.Router();

router.get("/getall", getAllTags);

router.get("/getusers", getUsers);

router.get("/getnotconnected", getNotConnected);
