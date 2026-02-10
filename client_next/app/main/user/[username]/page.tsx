"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "@/context/AppContext";
import ProfileLayout from "@/components/profile/ProfileLayout";

export default function UserProfilePage() {

  const { username } = useParams();
  const { userData } = useAppContext();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`${BACKEND_URL}/api/users/${username}`, { withCredentials: true });
        setUser(data);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [username]);

  if (loading) return <p className="p-10">Loading...</p>;
  if (!user) return <p>User not found</p>;

  const isFollowing = userData && Array.isArray(user.followers) && user.followers.includes(userData.id);

  return (
    <ProfileLayout
      user={user}
      isFollowing={isFollowing}
    />
  );
}
