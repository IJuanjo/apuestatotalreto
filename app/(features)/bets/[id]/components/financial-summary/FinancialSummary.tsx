interface FinancialSummaryProps {
  stake: number;
  odd: number;
  result: number;
}

export default function FinancialSummary({ stake, odd, result }: FinancialSummaryProps) {
  const isWin = result > 0;
  return (
    <section className="mt-6 rounded-xs border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-800">
        <span>↗</span>
        <span>Resumen Financiero</span>
      </div>

      <div className="space-y-3 text-slate-700">
        <div className="flex justify-between border-b border-slate-100 pb-2 text-sm">
          <span>Monto apostado</span>
          <span className="font-semibold">S/ {stake.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-b border-slate-100 pb-2 text-sm">
          <span>Cuota</span>
          <span className="font-semibold">{odd.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-2 text-base font-bold">
          <span>Ganancia</span>
          <span className={isWin ? "text-emerald-600" : "text-slate-800"}>S/ {result.toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
}
