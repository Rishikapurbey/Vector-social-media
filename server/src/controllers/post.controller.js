import Post from "../models/Post.js";

export const createPost = async (req, res, next) => {
    try {
        const { content, intent } = req.body;
        if (!content || !intent) {
            return res.json({
                success: false,
                message: "Content and intent are required"
            });
        }
        const post = await Post.create({author: req.user.id, content, intent});
        const populatedPost = await post.populate("author", "username name surname avatar");
        res.status(201).json({
            success: true,
            post: populatedPost
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).populate("author", "username name surname avatar");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
        success: false,
        message: error.message
    });
  }
}
