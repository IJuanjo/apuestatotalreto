import { cva } from "class-variance-authority";
import { BetStatus } from "@/app/(features)/bets/interface/http.interface";

const stateBadge = cva(
  "px-sm py-1 rounded-xs text-sm font-semibold border",
  {
    variants: {
      status: {
        PENDING:
          "bg-amber-100 text-amber-700 border-amber-300",
        WON: "bg-emerald-100 text-emerald-700 border-emerald-300",
        LOST: "bg-rose-100 text-rose-700 border-rose-300",
      },
    },
    defaultVariants: {
      status: "PENDING",
    },
  }
);

interface BetProps {
  readonly title: string;
  readonly date: string;
  readonly state: BetStatus;
  readonly coute: number;
  readonly selected: string;
  readonly handleClick?: () => void;
}

const Bet = (props: BetProps) => {
  const { title, date, selected, coute, state, handleClick } = props;
  return (
    <button
      className="cursor-pointer bg-white border-input flex flex-col gap-3 p-4 text-left sm:flex-row sm:items-center sm:justify-between"
      onClick={handleClick}
    >
      <div className="min-w-0">
        <div className="font-medium leading-6">{title}</div>
        <div className="text-grey mt-1">{date}</div>
      </div>
      <div className="grid grid-cols-3 items-start gap-3 text-left sm:flex sm:items-center sm:text-right">
        <div className="min-w-0">
          <div className="text-grey text-sm">Selección</div>
          <div className="font-medium leading-5">{selected}</div>
        </div>
        <div>
          <div className="text-grey text-sm">Cuota</div>
          <div className="font-bold text-red">S/ {coute}</div>
        </div>
        <div className={`${stateBadge({ status: state })} justify-self-start sm:justify-self-auto`}>
          {state}
        </div>
      </div>
    </button>
  )
}

export default Bet
