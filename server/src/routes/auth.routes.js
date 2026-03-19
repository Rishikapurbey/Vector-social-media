import express from "express";
import { getMe, login, logout, register } from "../controllers/auth.controller.js";
import passport from "../config/passport.js";
import { googleAuthCallback } from "../controllers/googleAuth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.get('/me', authMiddleware, getMe);

//oAuth
authRouter.get("/google", (req, res, next) => {
    const redirect = req.query.redirect || "/";
    passport.authenticate("google", {
        scope: ["profile", "email"],
        session: false,
        state: redirect,
    })(req, res, next);
});
authRouter.get("/google/callback", passport.authenticate("google", { session: false, failureRedirect: "/auth/login" }), googleAuthCallback);

export default authRouter;