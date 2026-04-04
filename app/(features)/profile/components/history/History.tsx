import { BetMe } from "@/app/(features)/bets/interface/http.interface"
import Bet from "../bet/Bet"
import { labelForSelected } from "../constant/betHistory"
import { useRouter } from "next/navigation"

interface HistoryProps {
  listBet: BetMe[]
}

const History = ({ listBet }: HistoryProps) => {
  const { push } = useRouter();

  return (
    <div className="border-input bg-white p-4.25">
      <div className="font-bold text-2xl mb-lg">Historial de Apuestas</div>
      <p className="text-sm text-gray-500 my-md">
        (Solo se muestran apuestas de partidos finalizados con información disponible.)
      </p>

      <div className="flex flex-col gap-md">
        {listBet.map((bet) => (
          <Bet
            key={bet.id}
            title={`${bet.homeTeam} vs ${bet.awayTeam}`}
            date={bet.date ?? ''}
            selected={labelForSelected[bet.pick]}
            coute={bet.odd}
            state={bet.status}
            handleClick={() => push(`/bets/${bet.id}`)}
          />
        ))}
      </div>
    </div>
  )
}

export default History
