import express from "express";
import { analyzeResume } from "../controllers/resume.controller.js";
import { upload } from "../middlewares/upload.js";

const resumeRouter = express.Router();

resumeRouter.post("/analyze", upload.single("resume"), analyzeResume);

export default resumeRouter;