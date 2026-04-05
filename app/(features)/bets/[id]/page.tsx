
import { BetMe } from "@bets/interface/http.interface";
import BetDetailHeader from "./components/bet-detail-header/BetDetailHeader";
import BreadcrumbBack from "@shared/components/breadcrumb-back/BreadcrumbBack";
import FinancialSummary from "./components/financial-summary/FinancialSummary";
import { getBetSingle } from "./utils/betSingle";

interface PageProps {
    params: {
        id: string;
    };
}

export default async function Page({ params }: PageProps) {
    const { id } =await params;
    const betDetail = await getBetSingle(id) as BetMe;

    return (
        <main className="container mx-auto p-6">
            <BreadcrumbBack />
            <BetDetailHeader
                date={betDetail.date ?? ''}
                homeTeam={betDetail.homeTeam ?? ''}
                awayTeam={betDetail.awayTeam ?? ''}
                selection={betDetail.pick ?? ''}
                odd={betDetail.odd ?? 0}
                status={betDetail.status ?? ''}
            />

            <FinancialSummary stake={betDetail.stake ?? 0} odd={betDetail.odd ?? 0} result={betDetail.return ?? 0} />
        </main>
    );
}
