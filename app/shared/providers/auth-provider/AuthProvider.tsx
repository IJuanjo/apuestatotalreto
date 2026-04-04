"use client";

import { createContext, Dispatch, useState } from "react";
import Render from "../../components/render/Render";
import Modal from "../../components/modal/Modal";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import useRouteGuard from "./hooks/useRouteGuard";

export type ContextAuth = Dispatch<React.SetStateAction<"login" | "register" | undefined>> | undefined;

export const contextAuth = createContext<ContextAuth>(undefined);

const AuthProvider = ({ children }: React.PropsWithChildren) => {
    const [show, setShow] = useState<"login" | "register" | undefined>(undefined);
    useRouteGuard();

    

    return (
        <contextAuth.Provider value={setShow}>
            {children}
            <Render isRender={Boolean(show)}>
                <Modal
                    title={show === "login" ? "Iniciar Sesión" : "Crear Cuenta"}
                    onClose={() => setShow(undefined)}
                    Children={
                        <Render isRender={show === "login"} fallback={<Register />}>
                            <Login />
                        </Render>
                    }
                />
            </Render>
        </contextAuth.Provider>
    )
}
export default AuthProvider