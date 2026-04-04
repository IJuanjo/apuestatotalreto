"use client";

import { cva } from "class-variance-authority";
import { BetStatus } from "@/app/(features)/bets/interface/http.interface";

interface BetDetailHeaderProps {
    date: string;
    homeTeam: string;
    awayTeam: string;
    selection: string;
    odd: number;
    status: BetStatus | string;
}

const containerStyle = cva("rounded-xs border p-6 shadow-sm", {
    variants: {
        status: {
            WON: "border-emerald-200 bg-emerald-50",
            LOST: "border-rose-200 bg-rose-50",
            PENDING: "border-amber-200 bg-amber-50",
        },
    },
    defaultVariants: {
        status: "PENDING",
    },
});

const statusBadge = cva("rounded-xs border px-4 py-1 text-sm font-semibold", {
    variants: {
        status: {
            WON: "bg-emerald-100 text-emerald-700 border-emerald-200",
            LOST: "bg-rose-100 text-rose-700 border-rose-200",
            PENDING: "bg-amber-100 text-amber-800 border-amber-200",
        },
    },
    defaultVariants: {
        status: "PENDING",
    },
});

const statusLabel: Record<BetStatus, string> = {
    [BetStatus.WON]: "Ganada",
    [BetStatus.LOST]: "Perdida",
    [BetStatus.PENDING]: "Pendiente",
};

export default function BetDetailHeader({ date, homeTeam, awayTeam, selection, odd, status }: BetDetailHeaderProps) {
    const resolvedStatus = Object.values(BetStatus).includes(status as BetStatus)
        ? (status as BetStatus)
        : BetStatus.PENDING;

    const statusClass = statusBadge({ status: resolvedStatus });
    const sectionClass = containerStyle({ status: resolvedStatus });
    const statusText = statusLabel[resolvedStatus] || String(status);

    return (
        <section className={sectionClass}>
            <div className="mb-4 flex items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-slate-800">Detalle de Apuesta</h1>
                <span className={statusClass}>{statusText}</span>
            </div>

            <div className="mb-6 flex items-center text-sm text-slate-600">
                <span className="mr-2">📅</span>
                <span>{date}</span>
            </div>

            <div className="rounded-xs bg-white p-4 text-slate-900 shadow-sm">
                <p className="text-lg font-semibold">Partido</p>
                <p className="text-base font-bold">{homeTeam} vs {awayTeam}</p>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xs border border-slate-200 bg-white p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Selección</p>
                    <p className="font-semibold text-slate-800 text-base">{selection}</p>
                </div>
                <div className="rounded-xs border border-slate-200 bg-white p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Cuota</p>
                    <p className="text-lg font-semibold text-rose-600">{odd.toFixed(2)}</p>
                </div>
                <div className="rounded-xs border border-slate-200 bg-white p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Estado</p>
                    <p className="text-base font-semibold text-slate-800">{statusLabel[resolvedStatus] || String(status)}</p>
                </div>
            </div>
        </section>
    );
}
