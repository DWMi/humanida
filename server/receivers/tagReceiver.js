import express from "express";
import { getAllTags, getUsers } from "../controllers/tagController.js";

export const router = express.Router();

router.get("/getall", getAllTags);

router.get("/getusers", getUsers);

// Instead used as middleware. Might have to change this for the frontend later.
//router.get("/getloggedinuser", getLoggedInUser)
