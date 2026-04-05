import { useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@shared/components/toast/ToastContext";
import { BetParamsActionSelect } from "@bets/interface/bet.interface";


interface UseBettingCardParams {
    readonly id: string;
    readonly homeTeam: string;
    readonly awayTeam: string;
    readonly date: string;
    handleActionSelect?: (data: BetParamsActionSelect) => void;
}

const useBettingCard = ({ id, homeTeam, awayTeam, date, handleActionSelect }: UseBettingCardParams) => {
    const [typeSelected, setTypeSelected] = useState<Set<string>>(() => {
        if (typeof window === "undefined") return new Set();
        const betSelected = JSON.parse(sessionStorage.getItem("betSelected") ?? "[]") as Array<BetParamsActionSelect>;
        const selectedForId = betSelected.filter(bet => bet.id === id);
        return new Set(selectedForId.map(bet => `${bet.type}-${bet.id}`));
    });
    const { data } = useSession();
    const { addToast } = useToast();

    const handleBetClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { type, id } = event.currentTarget.dataset;

        if (!type || !data) {
            addToast("Debes iniciar sesión para seleccionar una apuesta", "warning");
            return;
        };

        const alreadySelected = typeSelected.has(`${type}-${id}`);
        const newSelected = alreadySelected
            ? [...typeSelected].filter((item) => item !== `${type}-${id}`)
            : [...typeSelected, `${type}-${id}`];


        setTypeSelected(new Set(newSelected));

        handleActionSelect?.({
            type: type as string,
            id: id as string,
            homeTeam,
            awayTeam,
            date,
            isSelected: alreadySelected,
        });
    }

    return {
        typeSelected,
        handleBetClick
    }
}

export default useBettingCard;