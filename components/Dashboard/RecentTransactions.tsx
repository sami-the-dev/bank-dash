import { RECENT_TRANSACTIONS } from "@/data";
import { PaypalIcon, BusinessIcon, MoneyIcon } from "@/components/icons";

export default function RecentTransactions() {
  return (
    <div className="lg:col-span-1 h-full flex flex-col">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-primary-2">
          Recent Transaction
        </h2>
      </div>
      <div className="rounded-[25px] bg-white p-6 shadow-sm border border-border flex-1">
        <div className="space-y-1">
          {RECENT_TRANSACTIONS.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    transaction.icon === "paypal"
                      ? "bg-paleBlue"
                      : transaction.icon === "jemi"
                      ? "bg-cream"
                      : "bg-mint"
                  }`}
                >
                  {transaction.icon === "paypal" ? (
                    <PaypalIcon />
                  ) : transaction.icon === "jemi" ? (
                    <BusinessIcon />
                  ) : (
                    <MoneyIcon />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {transaction.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {transaction.date}
                  </p>
                </div>
              </div>
              <p
                className={`text-sm font-semibold ${
                  transaction.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {transaction.amount > 0 ? "+" : ""}$
                {Math.abs(transaction.amount)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
