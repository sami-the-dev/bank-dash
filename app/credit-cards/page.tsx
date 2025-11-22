import Header from "@/components/Layout/Header";
import SidePanel from "@/components/Layout/SidePanel";
import { CreditCard } from "lucide-react";
import { CREDIT_CARDS, CREDIT_CARD_TRANSACTIONS } from "@/data";

export default function CreditCardsPage() {
  return (
    <div className="flex min-h-screen">
      <SidePanel />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Credit Cards
              </h1>
              <p className="mt-2 text-muted-foreground">
                Manage your credit cards and track expenses
              </p>
            </div>

            {/* Credit Cards Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Card 1 */}
              <div className="relative overflow-hidden rounded-2xl  from-primary-2 to-blue-900 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm opacity-80">Balance</p>
                    <p className="mt-1 text-3xl font-bold">$5,756.00</p>
                  </div>
                  <CreditCard className="h-8 w-8 opacity-60" />
                </div>
                <div className="mt-8">
                  <p className="text-sm opacity-80">Card Holder</p>
                  <p className="mt-1 font-semibold">John Doe</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-80">Valid Thru</p>
                    <p className="mt-1 font-semibold">12/26</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-lg tracking-wider">
                      •••• •••• •••• 3456
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Balance</p>
                    <p className="mt-1 text-3xl font-bold text-foreground">
                      $2,345.00
                    </p>
                  </div>
                  <CreditCard className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="mt-8">
                  <p className="text-sm text-muted-foreground">Card Holder</p>
                  <p className="mt-1 font-semibold text-foreground">John Doe</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Valid Thru</p>
                    <p className="mt-1 font-semibold text-foreground">08/27</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-lg tracking-wider text-foreground">
                      •••• •••• •••• 7890
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Statistics */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Total Limit
                </h3>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  $25,000
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Across all cards
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Available Credit
                </h3>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  $16,899
                </p>
                <p className="mt-1 text-sm text-green-600">67.6% available</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-sm font-medium text-muted-foreground">
                  This Month Spend
                </h3>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  $3,240
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  +15% vs last month
                </p>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="rounded-lg border border-border bg-card">
              <div className="border-b border-border p-6">
                <h2 className="text-xl font-semibold text-foreground">
                  Recent Transactions
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      merchant: "Amazon",
                      date: "Nov 18, 2025",
                      amount: "-$156.00",
                      card: "••3456",
                    },
                    {
                      merchant: "Starbucks",
                      date: "Nov 17, 2025",
                      amount: "-$12.50",
                      card: "••3456",
                    },
                    {
                      merchant: "Apple Store",
                      date: "Nov 16, 2025",
                      amount: "-$899.00",
                      card: "••7890",
                    },
                    {
                      merchant: "Netflix",
                      date: "Nov 15, 2025",
                      amount: "-$15.99",
                      card: "••3456",
                    },
                  ].map((transaction, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border border-border p-4"
                    >
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {transaction.merchant}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {transaction.date} • Card {transaction.card}
                        </p>
                      </div>
                      <p className="font-semibold text-red-600">
                        {transaction.amount}
                      </p>
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
