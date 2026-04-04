import { LabelTypeOdds } from "../../../constant/bet.constant"
import { Match } from "../../../interface/http.interface"
import formatDate from "./date"


export const formatDataBetting = (matches: Match[]): Bet[] => {
    return matches.map(match => ({
        id: match.id,
        time: formatDate(match.startTime),
        league: match.league.name,
        homeTeam: match.homeTeam.name,
        awayTeam: match.awayTeam.name,
        odds: [
            { type: LabelTypeOdds.HOME, value: match.market.odds.home },
            { type: LabelTypeOdds.DRAW, value: match.market.odds.draw },
            { type: LabelTypeOdds.AWAY, value: match.market.odds.away }
        ],
        isLive: new Date(match.startTime) <= new Date() && new Date(match.endTime) >= new Date()
    }))
}
