export enum LabelTypeOdds {
    HOME = "home",
    DRAW = "draw",
    AWAY = "away"
}

export const LABEL_FOR_TYPE: Record<LabelTypeOdds, string> = {
    [LabelTypeOdds.HOME]: "Local",
    [LabelTypeOdds.DRAW]: "Empate",
    [LabelTypeOdds.AWAY]: "Visitante"
};
