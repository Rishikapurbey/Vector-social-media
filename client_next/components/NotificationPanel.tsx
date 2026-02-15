"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Notification = {
    _id: string;
    type: "follow" | "like" | "comment";
    sender: {
        _id: string;
        username: string;
        name: string;
        avatar?: string;
    };
    post?: {
        _id: string;
    };
    isRead: boolean;
    createdAt: string;
};

export default function NotificationPanel() {
    const { userData } = useAppContext();
    const router = useRouter();
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchNotifications = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${BACKEND_URL}/api/notifications`, { withCredentials: true });
            setNotifications(data);
        } catch (err: any) {
            toast.error(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    const markAllAsRead = async () => {
        try {
            const unread = notifications.filter(n => !n.isRead);
            await Promise.all(unread.map(n => axios.put(`${BACKEND_URL}/api/notifications/${n._id}/read`, {}, { withCredentials: true })));
            setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (userData) {
            fetchNotifications();
        }
    }, [userData]);

    useEffect(() => {
        if (notifications.some(n => !n.isRead)) {
            markAllAsRead();
        }
    }, [notifications.length]);

    if (!userData) {
        return null;
    }

    return (
        <div className="w-full mt-5">
            {loading ? (
                <p className="text-gray-500 text-sm">Loading notifications...</p>
            ) : notifications.length === 0 ? (
                <p className="text-gray-600 text-sm">
                    No notifications yet.
                </p>
            ) : (
                <div className="flex flex-col gap-2">
                    {notifications.map(n => (
                        <div key={n._id}
                            onClick={() => {
                                if (n.post?._id) {
                                    router.push(`/main/post/${n.post._id}`);
                                } else {
                                    router.push(`/main/user/${n.sender.username}`);
                                }
                            }}
                            className={`flex gap-3 p-4 rounded-xl cursor-pointer transition hover:bg-black/5 dark:hover:bg-white/10 ${!n.isRead ? "bg-blue-50 dark:bg-blue-900/20" : "bg-white dark:bg-black"}`}>
                            <img src={n.sender.avatar || "/default-avatar.png"} className="h-10 w-10 rounded-full object-cover"/>
                            <div className="text-sm">
                                <p>
                                    <span className="font-semibold">
                                        {n.sender.name}
                                    </span>{" "}
                                    {n.type === "follow" && "followed you"}
                                    {n.type === "like" && "liked your post"}
                                    {n.type === "comment" && "commented on your post"}
                                </p>

                                <p className="text-xs text-gray-500 mt-1">
                                    {new Date(n.createdAt).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
