"use client";

import Render from "@/app/shared/components/render/Render";
import { cx } from "class-variance-authority";
import useBettingCard from "./hook/useBettingCard";


interface BettingEventCardProps {
    bet: Bet;
    handleActionSelect?: (params: BetParamsActionSelect) => void;
}

const BettingEventCard = ({ bet, handleActionSelect }: BettingEventCardProps) => {
    const { time = '', league = '', homeTeam = '', awayTeam, id, odds, isLive } = bet;
    const { labelForType, typeSelected, handleBetClick } = useBettingCard({ id, homeTeam, awayTeam, date: time, handleActionSelect });

    return (
        <div className="rounded-2xs border-neutral-200 border-solid border bg-white">
            <div className=" flex items-center border-b gap-md border-b-neutral-100 px-lg py-sm">
                <Render isRender={isLive}>
                    <span className="bg-primary-500 text-white rounded-xs p-xs text-2xs">EN VIVO</span>
                </Render>
                <span className="text-xs text-neutral-400">{time}</span>
                <span className="text-xs text-neutral-300">{league}</span>
            </div>
            <div className="flex justify-between py-md px-lg">
                <div className="flex flex-col gap-xs">
                    <span className="text-gray-900 text-sm bold leading-none font-bold">{homeTeam}</span>
                    <span className="text-gray-900 text-sm bold leading-none font-bold">{awayTeam}</span>
                </div>
                <div className="flex gap-xs items-center">
                    {odds.map(({ type, value }, index) => {
                        const isSelected = typeSelected.has(`${type}-${id}`);
                        return (
                            <button key={index} onClick={handleBetClick}  data-type={type} data-id={id} className={cx("flex cursor-pointer flex-col h-fit bg-neutral-100 rounded-sm px-xs py-2xs gap-1", {
                                "bg-primary-500 text-white": isSelected,
                            })}>
                                <span className="text-sm leading-none font-bold">{value}</span>
                                <span className={cx("text-xs leading-none text-neutral-400 font-bold", {
                                    "text-white": isSelected,
                                })}>{labelForType[type]}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default BettingEventCard;