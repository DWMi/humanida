import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import { router as userRouter } from "./receivers/userReceiver.js";
import { router as tagRouter } from "./receivers/tagReceiver.js";

const app = express();
const port = 3000;

app.use(cors());

// Converting all requests from JSON.
app.use(express.json());

app.use(
  cookieSession({
    secret: "mQCBJEfr2zcxuE2zKgX5",
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    sameSite: false,
    httpOnly: true,
    secure: false,
  })
);

app.use("/api/user", userRouter);
app.use("/api/tag", tagRouter);

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
