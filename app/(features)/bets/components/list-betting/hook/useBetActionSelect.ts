import { useToast } from "@shared/components/toast/ToastContext";
import { BetParamsActionSelect } from "@bets/interface/bet.interface";

const useBetActionSelect = () => {
    const { addToast } = useToast();

    const handleActionSelect = ({ type, id, isSelected, awayTeam, date, homeTeam }: BetParamsActionSelect) => {

        const betSelected = JSON.parse(sessionStorage.getItem("betSelected") ?? "[]") as Array<BetParamsActionSelect>;

        let newBetSelected: Array<BetParamsActionSelect> = [
            ...betSelected,
            {
                type,
                id,
                homeTeam,
                awayTeam,
                date
            }
        ];

        if (isSelected) {
            newBetSelected = betSelected.filter(bet => bet.id !== id || bet.type !== type);
        }

        sessionStorage.setItem("betSelected", JSON.stringify(newBetSelected));
        const labelToast = isSelected ? "Apuesta eliminada!" : "Apuesta agregada!";
        addToast(labelToast, "info");
    };

    return {
        handleActionSelect
    };
};

export default useBetActionSelect;
