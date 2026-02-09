"use client";

import { Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PostsDisplay from "./PostsDisplay";
import FollowButton from "@/components/ui/FollowButton";

type ProfileLayoutProps = {
  user: any;
  isSelf: boolean;
  isFollowing?: boolean;
};

export default function ProfileLayout({user, isSelf, isFollowing}: ProfileLayoutProps) {

  const [activeTab, setActiveTab] = useState<"posts" | "followers" | "following">("posts");
  const router = useRouter();

  return (
    <div className="px-7 py-5">
      <div className="flex items-start gap-6 mb-8">
        <img src={user.avatar || "/default-avatar.png"} className="h-28 w-28 rounded-full object-cover border"/>

        <div className="flex flex-col gap-2 w-full">
          <div className="w-full flex justify-between items-start">
            <h1 className="text-2xl font-bold">
              {user.name} {user.surname}
            </h1>

            {isSelf ? (
              <button onClick={() => router.push("/main/settings")} className="px-4 py-1.5 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition flex items-center gap-1">
                <Edit className="h-4" />
                Edit profile
              </button>
            ) : (
              <FollowButton userId={user._id} isFollowing={isFollowing!} />
            )}
          </div>

          <p className="text-gray-500">@{user.username}</p>

          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            {user.bio}
          </p>

          <p className="text-sm opacity-80">{user.description}</p>

          <div className="flex gap-6 text-sm font-semibold mt-2">
            <span>{user.followers?.length} Followers</span>
            <span>{user.following?.length} Following</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-50 border-b border-black/10 dark:border-white/10 mb-6">
        {["posts", "followers", "following"].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab as any)} className={`relative pb-2 font-semibold capitalize transition cursor-pointer ${activeTab === tab ? "text-blue-500" : "text-gray-500 hover:text-black dark:hover:text-white"}`}>
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-blue-500 rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === "posts" && (
          <PostsDisplay userId={user._id} emptyText={isSelf ? "You haven't posted anything yet." : "This user hasn't posted yet."}/>)}
        {activeTab === "followers" && (
          <p className="text-gray-500 text-center mt-10">
            Followers coming soon
          </p>
        )}

        {activeTab === "following" && (
          <p className="text-gray-500 text-center mt-10">
            Following coming soon
          </p>
        )}
      </div>
    </div>
  );
}
