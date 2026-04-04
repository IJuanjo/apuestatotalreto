"use client";

import BettingEventCard from "../betting-event-card/BettingEventCard";
import Render from "@/components/render/Render";
import useListBet from "./hook/useListBet";
import ListBettingSkeleton from "./components/ListBettingSkeleton";
import useBetActionSelect from "./hook/useBetActionSelect";


const ListBetting = () => {
    const { data, isLoading } = useListBet();
    const { handleActionSelect } = useBetActionSelect();

    return (
        <Render
            isRender={!isLoading}
            fallback={<ListBettingSkeleton />}
        >
            <div className="flex flex-col gap-4 max-w-6xl mx-auto py-2xl px-2xl" >
                {data?.map(bet => (
                    <BettingEventCard key={bet.id} bet={bet} handleActionSelect={handleActionSelect} />
                ))}
            </div>
        </Render>
    )
}

export default ListBetting