import { useQuery } from "@/app/shared/hooks/useQuery"
import { getBetMe } from "../utils/betsme"
import { useMemo } from "react"
import { BetMe, BetMeResponse, BetStatus } from "../../bets/interface/http.interface"

const useProfileInformation = () => {

    const { data } = useQuery<BetMeResponse>(getBetMe)

    const informationBoxes = useMemo(() => {

        if (!data) return {};

        const betsSelected = JSON.parse(sessionStorage.getItem("betSelected") || "[]") as Array<BetParamsActionSelect>;

        const betsSelectedIds = new Set(betsSelected.map(bet => `${bet.type}-${bet.id}`));

        const betsMe = data.bets.filter(bet => betsSelectedIds.has(`${String(bet.pick).toLowerCase()}-${bet.matchId}`));

        const informationStatusCount = betsMe.reduce((acc, bet) => {
            const status = bet.status;
            acc[status] = (acc[status] || 0) + 1;
            return acc;
        }, {} as {
            [BetStatus.LOST]?: number;
            [BetStatus.PENDING]?: number;
            [BetStatus.WON]?: number;
        })


        const betsInformationById = betsSelected.reduce((acc, bet) => {
            acc[bet.id] = {
                homeTeam: bet.homeTeam,
                awayTeam: bet.awayTeam,
                date: bet.date
            };
            return acc;
        }, {} as Record<string, { homeTeam: string; awayTeam: string; date: string }>);


        const listedBetsHistory: BetMe[] = betsMe.map(bet => ({
            ...bet,
            homeTeam: betsInformationById[bet.matchId]?.homeTeam ?? "",
            awayTeam: betsInformationById[bet.matchId]?.awayTeam ?? "",
            date: betsInformationById[bet.matchId]?.date ?? "",
        }))

        const countTotalStatus = Object.values(informationStatusCount).reduce((sum, count) => sum + (count || 0), 0);

        return {
            history: listedBetsHistory,
            statusCount: informationStatusCount,
            countTotal: countTotalStatus
        }

    }, [data]);


    return {
        informationBoxes
    }


}
export default useProfileInformation;