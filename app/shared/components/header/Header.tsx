"use client";

import Logout from "@/icons/logout/Logout"
import Person from "@/icons/person/Person"
import Render from "../render/Render";
import useHeader from "./hooks/useHeader";
import { useRouter } from "next/navigation";


const Header = () => {
    const { push } = useRouter();
    const { session, handleAuthAction, logoutAction } = useHeader(push);

    return (
        <div className="w-full flex justify-between py-3.5 px-4 border-botton z-10">
            <button className="header-text text-2xl cursor-pointer" onClick={() => push("/bets")}>
                apuesta<span className="bold text-black">total</span>
            </button>
            <div className="flex items-center">
                <button className="btn-secondary flex items-center py-2 px-4 cursor-pointer" onClick={handleAuthAction}>
                    <Person />
                    <Render isRender={Boolean(session)} fallback={
                        <span className="hidden ml-2 md:block" >
                            Mi Cuenta
                        </span>
                    }>
                        <span className="hidden ml-2 md:block" >
                            {session?.user?.name}
                        </span>
                    </Render>
                </button>
                <Render isRender={Boolean(session)}>
                    <button onClick={logoutAction} className="p-2 ml-2 cursor-pointer">
                        <Logout />
                    </button>
                </Render>
            </div>
        </div>
    )
}

export default Header
