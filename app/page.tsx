import MyCards from "@/components/Dashboard/MyCards";
import RecentTransactions from "@/components/Dashboard/RecentTransactions";
import WeeklyActivity from "@/components/Dashboard/WeeklyActivity";
import ExpenseStatistics from "@/components/Dashboard/ExpenseStatistics";
import QuickTransfer from "@/components/Dashboard/QuickTransfer";
import BalanceHistory from "@/components/Dashboard/BalanceHistory";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch">
        <MyCards />
        <RecentTransactions />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-6 items-stretch">
        <WeeklyActivity />
        <ExpenseStatistics />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-6 items-stretch">
        <QuickTransfer />
        <BalanceHistory />
      </div>
    </>
  );
}
