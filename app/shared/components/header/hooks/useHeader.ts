import { contextAuth } from "@/app/shared/providers/auth-provider/AuthProvider";
import { signOut, useSession } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { use } from "react";

const useHeader = (navegate: AppRouterInstance['push']) => {
    const { data: session } = useSession();
    const setterActionComponentAuth = use(contextAuth);
    const handleAuthAction = () => {
        if (session) {
            navegate('/profile')
        } else {
            setterActionComponentAuth?.("login");
        }
    }

    const logoutAction = () => {
        sessionStorage.clear();
        signOut({
            redirect: true,
            callbackUrl: "/bets"
        })
    }

    return {
        session,
        handleAuthAction,
        logoutAction
    }
}

export default useHeader;