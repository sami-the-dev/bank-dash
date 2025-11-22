"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function AddNewCard() {
  const [cardType, setCardType] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    setExpirationDate(value);
  };

  return (
    <div className="col-span-2">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-primary-2">Add New Card</h2>
      </div>
      <Card>
        <CardContent className="p-6">
          <p className="text-sm mb-6 pr-5 text-primary-4">
            Credit Card generally means a plastic card issued by Scheduled
            Commercial Banks assigned to a Cardholder, with a credit limit, that
            can be used to purchase goods and services on credit or obtain cash
            advances.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="cardType"
                  className="block text-sm font-medium mb-2 text-primary-2"
                >
                  Card Type
                </label>
                <input
                  id="cardType"
                  type="text"
                  value={cardType}
                  onChange={(e) => setCardType(e.target.value)}
                  placeholder="Classic"
                  className="w-full px-4 py-3 border border-border rounded-[15px] focus:outline-none focus:ring-2 text-primary-2"
                />
              </div>

              <div>
                <label
                  htmlFor="nameOnCard"
                  className="block text-sm font-medium mb-2 text-primary-2"
                >
                  Name On Card
                </label>
                <input
                  id="nameOnCard"
                  type="text"
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  placeholder="My Cards"
                  className="w-full px-4 py-3 border border-border rounded-[15px] focus:outline-none focus:ring-2 text-primary-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium mb-2 text-primary-2"
                >
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="**** **** **** ****"
                  maxLength={19}
                  className="w-full px-4 py-3 border border-border rounded-[15px] focus:outline-none focus:ring-2 text-primary-2"
                />
              </div>

              <div>
                <label
                  htmlFor="expirationDate"
                  className="block text-sm font-medium mb-2 text-primary-2"
                >
                  Expiration Date
                </label>
                <input
                  id="expirationDate"
                  type="text"
                  value={expirationDate}
                  onChange={handleExpirationChange}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full px-4 py-3 border border-border rounded-[15px] focus:outline-none focus:ring-2 text-primary-2"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 rounded-[15px] text-white font-medium hover:opacity-90 transition-opacity bg-primary-3"
              >
                Add Card
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
