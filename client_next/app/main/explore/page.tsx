"use client";

import ExploreSidebar from "@/components/layouts/ExploreSidebar";
import axios from "axios";
import { ExternalLink, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Explore() {

    const [topPosts, setTopPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

    useEffect(() => {
        const fetchTopPosts = async () => {
            try {
                const { data } = await axios.get(`${BACKEND_URL}/api/posts/top-week`);
                setTopPosts(data);
            } finally {
                setLoading(false);
            }
        };
        fetchTopPosts();
    }, []);

    return (
        <div className="flex">
            <div className="w-full py-5 px-7">
                <p className="text-[1.6rem] font-semibold text-center md:text-left">Explore</p>
                <p className="opacity-45 text-center md:text-left">Discover people, posts and ideas</p>
                <div className="flex items-center px-2 gap-2 mt-5 border bg-black/5 rounded-full h-10">
                    <Search className="h-5" />
                    <input type="text" placeholder="Search" className="outline-0 w-full h-full" />
                </div>
                <div className="mt-5">
                    <p className="font-semibold">Trending domains</p>
                    <div className="flex justify-between my-5">
                        <div className="box h-35 w-[48%] border rounded-md overflow-clip relative cursor-pointer transition-all duration-300 hover:shadow-md">
                            <p className="absolute z-20 bottom-0 left-0 p-2 w-full flex items-center gap-2 bg-black/30 text-white"><ExternalLink className="text-blue-500" />Science and technology</p>
                            <img src="/science.webp" alt="" className="h-full w-full object-cover object-bottom" />
                        </div>
                        <div className="box h-35 w-[48%] border rounded-md overflow-clip relative cursor-pointer transition-all duration-300 hover:shadow-md">
                            <p className="absolute z-20 bottom-0 left-0 p-2 w-full flex items-center gap-2 bg-black/30 text-white"><ExternalLink className="text-blue-500" />Sports</p>
                            <img src="/kohli2.jpg" alt="" className="h-full w-full object-cover object-top" />
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="font-semibold">Top posts of the week</p>
                    <div className="flex flex-col gap-5 md:flex-row items-center justify-between mt-5">
                        {loading ? (
                            <p className="text-gray-500">Loading top posts...</p>
                        ) : topPosts.length === 0 ? (
                            <p className="text-gray-500">No trending posts this week</p>
                        ) : (
                            topPosts.map((post) => (
                                <div key={post._id} className="box w-[90%] md:w-[32%] border rounded-md px-5 py-4 relative cursor-pointer hover:bg-black/2">
                                    <p className="text-blue-500">
                                        {post.likes.length} likes
                                    </p>
                                    <p className="absolute top-4 right-4 text-[0.9rem] text-gray-600">
                                        #{post.intent}
                                    </p>
                                    <p className="my-3 line-clamp-4">
                                        {post.content}
                                    </p>
                                    <p className="text-[0.9rem] transition-all duration-200 hover:text-blue-500" onClick={() => router.push(`/main/user/${post.author.username}`)}>@{post.author.username}</p>
                                    <p className="text-gray-500 text-[0.8rem]">
                                        {new Date(post.createdAt).toLocaleDateString("en-GB")}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>

                </div>
            </div>
            <ExploreSidebar />
        </div>
    );
}