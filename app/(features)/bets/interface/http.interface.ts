export interface Team {
  id: string
  name: string
  shortName: string
}

export interface League {
  id: string
  name: string
  country: string
}

export interface MarketOdds {
  home: number
  draw: number
  away: number
}

export interface Market {
  type: string
  odds: MarketOdds
}

export interface Match {
  id: string
  startTime: string
  endTime: string
  league: League
  homeTeam: Team
  awayTeam: Team
  market: Market
}

export interface MatchesTodayResponse {
  date: string
  timezone: string
  matches: Match[]
}

export type BetResponse = MatchesTodayResponse

export enum BetStatus {
  PENDING = 'PENDING',
  WON = 'WON',
  LOST = 'LOST'
}

export enum BetPick {
  HOME = 'HOME',
  DRAW = 'DRAW',
  AWAY = 'AWAY'
}

export interface BetMe {
  id: string
  matchId: string
  placedAt: string
  pick: BetPick
  odd: number
  stake: number
  status: BetStatus
  return: number | null
  homeTeam?: string;
  awayTeam?: string;
  date?: string;
}

export interface BetMeResponse {
  bets: BetMe[]
}
