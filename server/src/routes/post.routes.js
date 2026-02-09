import express from "express";
import { createPost, deletePost, getPosts, getPostsByUser, toggleLike } from "../controllers/post.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const postRouter = express.Router();

postRouter.post("/", authMiddleware, createPost);
postRouter.get("/", getPosts);
postRouter.delete("/:id", authMiddleware, deletePost);
postRouter.put("/:id/like", authMiddleware, toggleLike);
postRouter.get("/user/:userId", getPostsByUser);

export default postRouter;