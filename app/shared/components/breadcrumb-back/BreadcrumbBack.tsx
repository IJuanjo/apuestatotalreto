"use client";

import ArrowBackIcon from "@/app/shared/icons/arrow-back/ArrowBackIcon"
import { useRouter } from "next/navigation";

interface BreadcrumbBackProps {
    description?: string;
    route?: string;
}

const BreadcrumbBack = ({ description, route }: BreadcrumbBackProps) => {
    const { push } = useRouter();
    return (
        <div className="flex gap-sm items-center mb-lg">
            <button className="cursor-pointer" onClick={() => push(route ?? "/profile")}>
                <ArrowBackIcon />
            </button>
            <span className="block">{description ?? "Volver al perfil"}</span>
        </div>
    )
}

export default BreadcrumbBack