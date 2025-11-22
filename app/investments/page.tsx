import InvestmentStatCard from "@/components/Investments/InvestmentStatCard";
import YearlyTotalInvestment from "@/components/Investments/YearlyTotalInvestment";
import MonthlyRevenue from "@/components/Investments/MonthlyRevenue";
import MyInvestment from "@/components/Investments/MyInvestment";
import TrendingStock from "@/components/Investments/TrendingStock";
import DollarIcon from "@/components/icons/DollarIcon";
import PieChart from "@/components/icons/PieChart";
import AppleIcon from "@/components/icons/AppleIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import TeslaIcon from "@/components/icons/TeslaIcon";
import { COLORS } from "@/constants";
import { Repeat } from "lucide-react";
import { MY_INVESTMENTS } from "@/data";

export default function InvestmentsPage() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <InvestmentStatCard
          icon={<DollarIcon />}
          title="Total Invested Amount"
          value="$150,000"
        />
        <InvestmentStatCard
          icon={<PieChart />}
          title="Number of Investments"
          value="1,250"
        />
        <InvestmentStatCard
          icon={<Repeat width={28} height={28} color={COLORS.primary3} />}
          title="Rate of Return"
          value="+5.80%"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-6 items-stretch">
        <YearlyTotalInvestment />
        <MonthlyRevenue />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-6 items-start">
        <MyInvestment
          investments={[
            {
              ...MY_INVESTMENTS[0],
              icon: <AppleIcon />,
            },
            {
              ...MY_INVESTMENTS[1],
              icon: <GoogleIcon />,
            },
            {
              ...MY_INVESTMENTS[2],
              icon: <TeslaIcon />,
            },
          ]}
        />
        <TrendingStock />
      </div>
    </div>
  );
}
