"use client";

import { useAppContext } from "@/context/AppContext";
import ProfileLayout from "@/components/profile/ProfileLayout";

export default function ProfilePage() {
  const { userData, loading } = useAppContext();

  if (loading) return <p className="p-10">Loading...</p>;
  if (!userData) return <p className="p-10">Not logged in</p>;

  return (
    <ProfileLayout user={userData}/>
  );
}
