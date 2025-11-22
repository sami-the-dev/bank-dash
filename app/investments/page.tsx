import Header from "@/components/Layout/Header";
import SidePanel from "@/components/Layout/SidePanel";
import { INVESTMENT_HOLDINGS } from "@/data";

export default function InvestmentsPage() {
  return (
    <div className="flex min-h-screen">
      <SidePanel />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Investments
              </h1>
              <p className="mt-2 text-muted-foreground">
                Manage your investment portfolio and track performance
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Investment Summary Cards */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Total Portfolio Value
                </h3>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  $125,430.50
                </p>
                <p className="mt-1 text-sm text-green-600">+12.5% this month</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Total Gain/Loss
                </h3>
                <p className="mt-2 text-3xl font-bold text-green-600">
                  +$15,230.00
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Since inception
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Active Investments
                </h3>
                <p className="mt-2 text-3xl font-bold text-foreground">24</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Across 5 categories
                </p>
              </div>
            </div>

            {/* Investment Holdings */}
            <div className="rounded-lg border border-border bg-card">
              <div className="border-b border-border p-6">
                <h2 className="text-xl font-semibold text-foreground">
                  Investment Holdings
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {INVESTMENT_HOLDINGS.map((investment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border border-border p-4"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">
                          {investment.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {investment.symbol} • {investment.shares} shares
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">
                          {investment.value}
                        </p>
                        <p
                          className={`text-sm ${
                            investment.positive
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {investment.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
