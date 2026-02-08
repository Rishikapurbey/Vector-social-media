import jwt from "jsonwebtoken";

export const googleAuthCallback = async (req, res) => {
    try {
        const user = req.user;
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            path: "/",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        if (!user.isProfileComplete) {
            return res.redirect("http://localhost:3000/auth/profile?register=google");
        }
        res.redirect("http://localhost:3000/main?login=google");
    } catch (err) {
        console.error(err);
        res.redirect("http://localhost:3000/auth/login?error=google");
    }
};
