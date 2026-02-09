import axios from "axios";
import { useState } from "react";

export default function FollowButton({ userId, isFollowing }: any) {

  const [following, setFollowing] = useState(isFollowing);
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

  const toggleFollow = async () => {
    const res = await axios.put(`${BACKEND_URL}/api/users/${userId}/follow`, {}, { withCredentials: true });
    setFollowing(res.data.followed);
  };

  return (
    <button onClick={toggleFollow} className={`w-30 h-9 rounded-md cursor-pointer font-medium ${following ? "border text-gray-700" : "bg-blue-500 text-white"}`}>
      {following ? "Following" : "Follow"}
    </button>
  );
}
