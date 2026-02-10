"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const { isLoggedIn, userData, loading } = useAppContext();

    useEffect(() => {
        if (!loading && !isLoggedIn) {
            router.replace("/auth/login");
        }
    }, [loading, isLoggedIn, router]);

    if (loading || !isLoggedIn) {
        return <p>Loading...</p>;
    }

    if (!loading && isLoggedIn && !userData?.isProfileComplete) {
        router.replace("/auth/profile");
    }


    return <>{children}</>;
}
