import type { BetMe, BetMeResponse, BetResponse, Match } from "@/app/(features)/bets/interface/http.interface";
import { readFileSync } from "node:fs";

export async function GET(
    _: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const fileBetsAll = await readFileSync(process.cwd() + '/app/shared/data/matches-today.json', 'utf8');
    const fileBetsMe = await readFileSync(process.cwd() + '/app/shared/data/bets-me.json', 'utf8');
    const { matches } = JSON.parse(fileBetsAll) as BetResponse ?? { matches: [] };
    const { bets } = JSON.parse(fileBetsMe) as BetMeResponse ?? { bets: [] };
    const betMeForId = bets.find(bet => bet.id === id) as BetMe ?? {};
    const betsForId = matches.find(match => match.id === betMeForId.matchId) as Match ?? {};
    return Response.json({
        ...betMeForId,
        homeTeam: betsForId?.homeTeam?.name,
        awayTeam: betsForId?.awayTeam?.name
    })
}