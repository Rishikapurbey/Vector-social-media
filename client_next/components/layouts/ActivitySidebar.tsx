"use client";

import { Button } from "../ui/button";
import { Search, UserPlus, X } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "@/context/AppContext";

type User = {
  _id: string;
  name: string;
  bio?: string;
  avatar?: string;
};

export default function ActivitySidebar() {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const { userData } = useAppContext();

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(BACKEND_URL + "/api/users/all", {withCredentials: true});
        setUsers(res.data.users);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => user._id !== userData?.id);

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed top-4 right-4 z-50 lg:hidden p-2 rounded-full bg-blue-500 text-white shadow-lg" aria-label="Open follow suggestions">
        <UserPlus />
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setOpen(false)}/>
      )}

      <div className={`h-screen md:h-fit w-fit p-5 bg-white dark:bg-black fixed lg:static top-0 right-0 z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} lg:translate-x-0`}>
        <button onClick={() => setOpen(false)} className="absolute top-4 right-4 lg:hidden" aria-label="Close">
          <X />
        </button>

        <p className="font-semibold ml-2 text-[1.1rem]">
          Search people you know
        </p>
        <div className="flex border h-10 rounded-full items-center px-3 bg-black/3 mt-7 mb-5">
          <Search className="h-5" />
          <input type="text" placeholder="Search" className="outline-0 w-full h-full px-3 bg-transparent"/>
        </div>

        <p className="text-[1.1rem] font-semibold flex items-center gap-2">
          <UserPlus className="h-5 text-blue-500" />
          Suggestions
        </p>
        
        <div className="mt-5 flex flex-col gap-6 max-h-[60vh] hide-scrollbar overflow-y-auto pr-1">
          {loading ? (
            <p className="text-sm opacity-50">Loading users...</p>
          ) : filteredUsers.length === 0 ? (
            <p className="text-sm opacity-50">No users found.</p>
          ) : (
            filteredUsers.map((user) => (
              <div key={user._id} className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                  <img src={user.avatar || "/default-avatar.png"} alt={user.name} className="h-full w-full object-cover"/>
                </div>

                <div className="flex flex-col w-35">
                  <p className="text-[0.9rem] truncate">
                    {user.name}
                  </p>
                  <p className="opacity-50 text-[0.8rem] truncate">
                    {user.bio || "No bio available"}
                  </p>
                </div>

                <Button className="h-8 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white">
                  Follow
                </Button>
              </div>
            ))
          )}
        </div>

        <p className="text-gray-400 text-[0.8rem] text-center mt-10">
          All rights reserved @Vector 2026
        </p>
      </div>
    </>
  );
}
