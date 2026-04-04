"use client";

import BreadcrumbBack from '@/app/shared/components/breadcrumb-back/BreadcrumbBack';
import { BetStatus } from '../bets/interface/http.interface';
import Amount from './components/amount/Amount'
import History from './components/history/History'
import useProfileInformation from './hooks/useProfileInformation';


const page = () => {
  const { informationBoxes } = useProfileInformation();
  const { history, statusCount = {}, countTotal = 0 } = informationBoxes;

  return (
    <div className="p-4 w-full  max-w-6xl mx-auto">
      <BreadcrumbBack description='Volver' route='/bets' />
      <div className="font-bold text-2xl">Mi Cuenta</div>
      <div className="text-grey">Revisa tu historial y apuestas actuales</div>
      <div className="flex flex-wrap justify-between gap-3 my-6">
        <Amount amount={countTotal} text="Total Apuestas" color="text-black flex-1" />
        <Amount amount={statusCount[BetStatus.PENDING] ?? 0} text="Pendientes" color="text-orange flex-1" />
        <Amount amount={statusCount[BetStatus.WON] ?? 0} text="Ganadas" color="text-green flex-1" />
        <Amount amount={statusCount[BetStatus.LOST] ?? 0} text="Perdidas" color="text-red flex-1" />
      </div>
      <History listBet={history ?? []} />
    </div>
  )
}

export default page
