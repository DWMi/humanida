import express from "express";
import {
  getAllTags,
  getById,
  getNotConnected,
  getUsers,
} from "../controllers/tagController.js";

export const router = express.Router();

router.get("/getall", getAllTags);

router.get("/getbyid", getById);

router.get("/getusers", getUsers);

router.get("/getnotconnected", getNotConnected);
