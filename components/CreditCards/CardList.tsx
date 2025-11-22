import { Card, CardContent } from "@/components/ui/card";
import { COLORS } from "@/constants";
import CardIcon from "../icons/CardIcon";
import { CARD_LIST } from "@/data";

export default function CardList() {
  return (
    <div className="col-span-2">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-primary-2">Card List</h2>
      </div>
      <div className="space-y-2">
        {CARD_LIST.map((card) => (
          <Card key={card.id}>
            <CardContent className="p-6">
              <div className="grid grid-cols-6 gap-4 items-center">
                {card.bank === "DBL Bank" ? (
                  <CardIcon
                    fill={COLORS.blue}
                    backgroundFill={COLORS.paleBlue}
                  />
                ) : card.bank === "BRC Bank" ? (
                  <CardIcon
                    fill={COLORS.pink}
                    backgroundFill={COLORS.paleRose}
                  />
                ) : (
                  <CardIcon fill={COLORS.amber} backgroundFill={COLORS.ivory} />
                )}
                <div className="flex flex-col">
                  <div className="text-sm font-medium">Card Type</div>
                  <p className="text-primary-4">{card.type}</p>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm font-medium">Bank</div>
                  <p className="text-primary-4">{card.bank}</p>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm font-medium">Card Number</div>
                  <p className="text-primary-4">{card.cardNumber}</p>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm font-medium">Name on Card</div>
                  <p className="text-primary-4">{card.nameOnCard}</p>
                </div>
                <div className="text-sm font-medium text-right text-primary-blue">
                  {card.status}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
