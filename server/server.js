import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./src/config/mongodb.js";
import authRouter from "./src/routes/auth.routes.js";
import postRouter from "./src/routes/post.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import passport from "./src/config/passport.js";
import commentRoutes from "./src/routes/comment.routes.js";

const app = express();

connectDB();

app.use(cors({
  origin: ["http://localhost:3000", "http://vector-lac.vercel.app"],
  credentials: true,
}));

app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

app.get("/", (req, res) => {
  res.send("Server is up and running 🚀");
});

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
