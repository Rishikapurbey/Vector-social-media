import User from "../models/User.js"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const { fullName, username, description, bio, email, phoneNumber, password } = req.body;
    if (!fullName || !username || !email || !password || !description || !bio || !phoneNumber) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required fields!"
        })
    }
    try {
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists!"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ fullName, username, email, password: hashedPassword, phoneNumber, description, bio, });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return res.status(200).json({
            success: true,
            message: "Account created successfully"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}