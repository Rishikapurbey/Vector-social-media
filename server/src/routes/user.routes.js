import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";
import { getUserProfile, toggleFollowUser, updateProfile, uploadAvatar } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/avatar", authMiddleware, upload.single("avatar"), uploadAvatar);
userRouter.put("/update-profile", authMiddleware, updateProfile);
userRouter.put("/:id/follow", authMiddleware, toggleFollowUser);
userRouter.get("/:username", getUserProfile);

export default userRouter;