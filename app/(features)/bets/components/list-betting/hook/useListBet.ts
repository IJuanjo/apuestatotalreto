import { useQuery } from "@tanstack/react-query";
import { Match } from "@bets/interface/http.interface";
import { formatDataBetting } from "../utils/getBetting";

const useListBet = () => useQuery({
    queryKey: ['ListBet'],
    queryFn: async () => {
        console.log('Fetching betting data...');
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bet`);
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data?.error ?? "Error al obtener las apuestas");
        }

        const { matches } = data as { matches: Match[] };
        return { matches };
    },
    select: (data) => {
        const { matches } = data;
        const formattedData = formatDataBetting(matches);
        return formattedData;
    }
})

export default useListBet