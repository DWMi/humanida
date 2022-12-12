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

// router.post("/login", logInUser, validateUser);

// router.get("/logout", logOutUser);

// router.get("/validateuser", validateUser);

// router.get("/getusers", getLoggedInUser, getUsers);

// Instead used as middleware. Might have to change this for the frontend later.
//router.get("/getloggedinuser", getLoggedInUser)
