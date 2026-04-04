interface Bet {
    id: string;
    homeTeam: string;
    awayTeam: string;
    league: string;
    time: string;
    odds: Array<{
        type: string;
        value: number;
    }>;
    isLive?: boolean;
}

interface BetParamsActionSelect {
    type: string;
    id: string;
    homeTeam: string;
    awayTeam: string;
    date: string;
    isSelected?: boolean;
}