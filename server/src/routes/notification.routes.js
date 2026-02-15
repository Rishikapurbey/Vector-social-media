import express from "express";
import auth from "../middlewares/auth.middleware.js";
import { getNotifications, markAsRead } from "../controllers/notification.controller.js";

const notificationRouter = express.Router();

notificationRouter.get("/", auth, getNotifications);
notificationRouter.put("/:id/read", auth, markAsRead);

export default notificationRouter;