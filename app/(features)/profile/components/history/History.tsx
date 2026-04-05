import { BetMe } from "@/app/(features)/bets/interface/http.interface"
import Render from "@/components/render/Render"
import Bet from "../bet/Bet"
import { labelForSelected } from "../constant/betHistory"
import { useRouter } from "next/navigation"

interface HistoryProps {
  listBet: BetMe[]
}

const History = ({ listBet }: HistoryProps) => {
  const { push } = useRouter();
  const hasBets = listBet.length > 0;

  return (
    <div className="border-input bg-white p-4.25">
      <div className="font-bold text-2xl mb-lg">Historial de Apuestas</div>
      <p className="text-sm text-gray-500 my-md">
        (Solo se muestran apuestas de partidos finalizados con información disponible.)
      </p>

      <Render
        isRender={hasBets}
        fallback={
          <div className="rounded-sm border border-dashed border-neutral-200 bg-neutral-100 px-4 py-8 text-center">
            <p className="text-base font-semibold text-neutral-900">Aun no tienes apuestas registradas</p>
            <p className="mt-2 text-sm text-neutral-400">Selecciona una cuota desde la lista de partidos para comenzar a construir tu historial.</p>
          </div>
        }
      >
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
      </Render>
    </div>
  )
}

export default History
