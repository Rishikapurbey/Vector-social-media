"use client"

import { useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { Clock, CreditCard, Download, FileSpreadsheetIcon, HelpCircle, Settings, ShoppingCart, User2, X } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

export default function User() {

    const { userData, loading, isLoggedIn, setIsLoggedIn, setUserData } = useAppContext();
    const [open, setOpen] = useState(false);
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

    const handleLogout = async () => {
        try {
            const { data } = await axios.post(BACKEND_URL + '/api/auth/logout', {}, { withCredentials: true });
            if (data.success) {
                toast.success("Logged out successfully");
                setIsLoggedIn(false);
                setUserData(null);
            }
        } catch (error: any) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Something went wrong");
            }
        }
    }

    return (
        <>
            <div onClick={() => setOpen(true)} className="h-11 w-11 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer">
                {userData ? (
                    <div>{userData.name.charAt(0)}</div>
                ) : (
                    <User2 className="text-gray-500" />
                )}
            </div>

            {open && (
                <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/30 z-40" />
            )}

            <div className={`fixed top-0 right-0 h-screen w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-5 h-full flex flex-col">
                    <div className="flex justify-between">
                        <p className="font-semibold text-lg">User Panel</p>
                        <button onClick={() => setOpen(false)} className="text-sm text-blue-500">
                            <X className="text-gray-400 h-5"/>
                        </button>
                    </div>

                    {userData ? (
                        <div>
                            <div className="flex gap-3 items-center">
                                <div className="h-16 w-16 mt-3 bg-blue-100 rounded-full flex items-center justify-center">
                                    <p className="text-[1.4rem]">{userData.name.charAt(0)}</p>
                                </div>
                                <div className="text-sm">
                                    <p className="mt-3 text-blue-500">
                                        {userData.name} {userData.surname}
                                    </p>
                                    <p className="mt-2 text-gray-600">
                                        {userData.email}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 flex flex-col">
                                <div className="flex gap-3 items-center py-3 rounded-lg transition-all duration-200 hover:bg-blue-50 px-3 cursor-pointer hover:text-blue-500">
                                    <ShoppingCart className="text-gray-500"/> My orders
                                </div>
                                <div className="flex gap-3 items-center py-3 rounded-lg transition-all duration-200 hover:bg-blue-50 px-3 cursor-pointer hover:text-blue-500">
                                    <Clock className="text-gray-500"/> Purchase history
                                </div>
                                <div className="flex gap-3 items-center py-3 rounded-lg transition-all duration-200 hover:bg-blue-50 px-3 cursor-pointer hover:text-blue-500">
                                    <CreditCard className="text-gray-500"/> Billing
                                </div>
                                <div className="flex gap-3 items-center py-3 rounded-lg transition-all duration-200 hover:bg-blue-50 px-3 cursor-pointer hover:text-blue-500">
                                    <Download className="text-gray-500"/> Downloads
                                </div>
                                <div className="flex gap-3 items-center py-3 rounded-lg transition-all duration-200 hover:bg-blue-50 px-3 cursor-pointer hover:text-blue-500">
                                    <FileSpreadsheetIcon className="text-gray-500"/> Templates
                                </div>
                                <div className="flex gap-3 items-center py-3 rounded-lg transition-all duration-200 hover:bg-blue-50 px-3 cursor-pointer hover:text-blue-500">
                                    <Settings className="text-gray-500"/> Settings
                                </div>
                                <div className="flex gap-3 items-center py-3 rounded-lg transition-all duration-200 hover:bg-blue-50 px-3 cursor-pointer hover:text-blue-500">
                                    <HelpCircle className="text-gray-500"/> Support
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="mt-5 text-center text-sm text-gray-600">
                            Not logged in
                        </p>
                    )}

                    <div className="mt-auto">
                        {!loading && (
                            <>
                                {isLoggedIn ? (
                                    <button onClick={handleLogout} className="hidden md:inline-flex bg-blue-500 text-white w-full rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-200 items-center justify-center py-2 px-4">
                                        Log out
                                    </button>
                                ) : (
                                    <Link href="/auth/login" className="hidden md:inline-flex bg-blue-500 text-white w-full rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-200 items-center justify-center py-2 px-4">
                                        Log in
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}