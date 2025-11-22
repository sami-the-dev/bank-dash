import EllipseIcon from "@/components/icons/EllipseIcon";
import ChipCard from "@/components/icons/ChipCardIcon";
import DarkChipIcon from "@/components/icons/DarkChipIcon";
import DarkEllipseIcon from "@/components/icons/DarkEllipseIcon";
import { CREDIT_CARDS_LIST } from "@/data";

export default function CreditCardList() {
  return (
    <div>
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-primary-2">My Cards</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CREDIT_CARDS_LIST.map((card) => (
          <div
            key={card.id}
            className={`group relative h-[235px] w-full overflow-hidden rounded-[25px] p-6 shadow-lg transition-all hover:shadow-xl ${
              card.type === "front"
                ? `bg-linear-to-br ${card.gradient} text-white`
                : "border-2 border-border bg-white"
            }`}
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className={`text-xs ${
                      card.type === "front"
                        ? "text-white/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    Balance
                  </p>
                  <p
                    className={`mt-1 text-xl font-semibold ${
                      card.type === "back" ? "text-foreground" : ""
                    }`}
                  >
                    ${card.balance.toLocaleString()}
                  </p>
                </div>
                <div className="h-8 w-12">
                  {card.type === "front" ? <ChipCard /> : <DarkChipIcon />}
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div>
                  <p
                    className={`text-[10px] ${
                      card.type === "front"
                        ? "text-white/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    CARD HOLDER
                  </p>
                  <p
                    className={`mt-1 text-sm font-semibold ${
                      card.type === "back" ? "text-foreground" : ""
                    }`}
                  >
                    {card.cardHolder}
                  </p>
                </div>
                <div>
                  <p
                    className={`text-[10px] ${
                      card.type === "front"
                        ? "text-white/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    VALID THRU
                  </p>
                  <p
                    className={`mt-1 text-sm font-semibold ${
                      card.type === "back" ? "text-foreground" : ""
                    }`}
                  >
                    {card.validThru}
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center justify-between rounded-b-[25px] px-6 py-4 -mx-6 -mb-6 ${
                  card.type === "front"
                    ? "bg-linear-to-r from-white/10 to-white/5 backdrop-blur-sm"
                    : "border-t border-border bg-linear-to-r from-muted/30 to-muted/10"
                }`}
              >
                <p
                  className={`font-mono text-lg tracking-wider ${
                    card.type === "back" ? "text-foreground" : ""
                  }`}
                >
                  {card.cardNumber}
                </p>
                <div
                  className={`flex h-6 w-10 items-center justify-center rounded ${
                    card.type === "front" ? "bg-white/20" : "bg-muted"
                  }`}
                >
                  {card.type === "front" ? (
                    <EllipseIcon card={card} />
                  ) : (
                    <DarkEllipseIcon />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
