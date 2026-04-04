import { useEffect, useRef, useState } from "react";
import { LabelTypeOdds } from "../../../constant/bet.constant";
import { useSession } from "next-auth/react";
import { useToast } from "@/app/shared/components/toast/ToastContext";

interface UseBettingCardParams {
    readonly id: string;
    readonly homeTeam: string;
    readonly awayTeam: string;
    readonly date: string;
    handleActionSelect?: (data: BetParamsActionSelect) => void;
}

const useBettingCard = ({ id, homeTeam, awayTeam, date, handleActionSelect }: UseBettingCardParams) => {
    const [typeSelected, setTypeSelected] = useState<Set<string>>(new Set());
    const { data } = useSession();
    const { addToast } = useToast();

    useEffect(() => {
        const betSelected = JSON.parse(sessionStorage.getItem("betSelected") ?? "[]") as Array<BetParamsActionSelect>;
        const selectedForId = betSelected.filter(bet => bet.id === id);

        setTypeSelected(new Set(selectedForId.map(bet => `${bet.type}-${bet.id}`)));
    }, [id]);

    const labelForType = useRef<Record<string, string>>({
        [LabelTypeOdds.HOME]: "Local",
        [LabelTypeOdds.DRAW]: "Empate",
        [LabelTypeOdds.AWAY]: "Visitante"
    }).current;

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
        labelForType,
        typeSelected,
        handleBetClick
    }
}

export default useBettingCard;