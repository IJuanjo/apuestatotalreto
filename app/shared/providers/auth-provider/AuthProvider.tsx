"use client";

import { createContext, Dispatch, useState } from "react";
import Render from "../../components/render/Render";
import Modal from "../../components/modal/Modal";
import AuthGoogle from "../../components/auth-google/AuthGoogle";
import useRouteGuard from "./hooks/useRouteGuard";

export type ContextAuth = Dispatch<React.SetStateAction<boolean>> | undefined;

export const contextAuth = createContext<ContextAuth>(undefined);

const AuthProvider = ({ children }: React.PropsWithChildren) => {
    const [show, setShow] = useState(false);
    useRouteGuard();

    return (
        <contextAuth.Provider value={setShow}>
            {children}
            <Render isRender={show}>
                <Modal
                    title="Iniciar Sesion"
                    onClose={() => setShow(false)}
                    Children={<AuthGoogle />}
                />
            </Render>
        </contextAuth.Provider>
    )
}
export default AuthProvider