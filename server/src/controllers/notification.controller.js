import Notification from "../models/notification.model.js";

export const getNotifications = async (req, res) => {
    const notifications = await Notification.find({ recipient: req.user._id, }).populate("sender", "name username avatar").populate("post").sort({ createdAt: -1 });
    return res.json(notifications);
};

export const markAsRead = async (req, res) => {
    await Notification.findByIdAndUpdate(req.params.id, { isRead: true });
    return res.json({
        success: true
    });
};