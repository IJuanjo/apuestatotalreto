"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useToast } from "@/app/shared/components/toast/ToastContext";

const PUBLIC_ROUTES = ["/bets"];
const PRIVATE_ROUTES = ["/profile"];

const isPublicRoute = (pathname: string) =>
    PUBLIC_ROUTES.some((route) => pathname === route);

const isPrivateRoute = (pathname: string) =>
    PRIVATE_ROUTES.some((route) => pathname.startsWith(route)) ||
    /^\/bets\/.+/.test(pathname);

const useRouteGuard = () => {
    const { data: session, status } = useSession();
    const pathname = usePathname();
    const router = useRouter();
    const { addToast } = useToast();

    useEffect(() => {
        if (status === "loading") return;

        if (!isPublicRoute(pathname) && !isPrivateRoute(pathname)) {
            router.replace("/bets");
            return;
        }

        if (isPrivateRoute(pathname) && !session) {
            sessionStorage.clear();
            addToast("Debes iniciar sesión para continuar", "warning");
            router.replace("/bets");
        }
    }, [pathname, session, status, router, addToast]);
};

export default useRouteGuard;
