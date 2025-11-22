"use client";
import { useState } from "react";
import Image from "next/image";
import { Send, ChevronRight } from "lucide-react";
import { QUICK_TRANSFER_CONTACTS } from "@/data";

export default function QuickTransfer() {
  const [amount, setAmount] = useState("525.50");
  const [selectedContact, setSelectedContact] = useState(0);

  const handleNext = () => {
    setSelectedContact((prev) => (prev + 1) % QUICK_TRANSFER_CONTACTS.length);
  };

  const handlePrev = () => {
    setSelectedContact(
      (prev) =>
        (prev - 1 + QUICK_TRANSFER_CONTACTS.length) %
        QUICK_TRANSFER_CONTACTS.length
    );
  };

  return (
    <div className="lg:col-span-1 h-full flex flex-col">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-primary-2">Quick Transfer</h2>
      </div>
      <div className="rounded-[25px] bg-white p-6 shadow-sm border border-border flex-1 flex flex-col justify-center">
        {/* Contacts Slider */}
        <div className="relative mb-6">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              className="p-2 hover:bg-muted rounded-full transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground rotate-180" />
            </button>

            <div className="flex gap-6 flex-1 justify-center">
              {QUICK_TRANSFER_CONTACTS.map((contact, index) => {
                const isSelected = index === selectedContact;

                return (
                  <div
                    key={contact.id}
                    onClick={() => setSelectedContact(index)}
                    className={`flex flex-col items-center transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-70"
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full overflow-hidden mb-2 transition-transform duration-300 ${
                        isSelected
                          ? "ring-2 ring-primary-2 ring-offset-2 scale-110"
                          : ""
                      }`}
                    >
                      <Image
                        src={contact.avatar}
                        alt={contact.name}
                        placeholder="blur"
                        className={`w-full h-full object-cover ${
                          contact.id == 1
                            ? "object-center scale-150"
                            : "object-top scale-150"
                        }`}
                      />
                    </div>
                    <p
                      className={`text-sm ${
                        isSelected ? "font-semibold" : "font-normal"
                      } text-dark-gray`}
                    >
                      {contact.name}
                    </p>
                    <p className="text-xs text-primary-4">{contact.role}</p>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="p-2 hover:bg-muted rounded-full transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Amount Input */}
        <div className="space-y-4 flex items-center justify-between gap-5">
          <label htmlFor="amount" className="block text-sm text-primary-4">
            Write Amount
          </label>

          <div className="flex items-center justify-between gap-4">
            <input
              id="amount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-light-blue border-0 text-primary-4 focus:outline-none focus:ring-2 focus:ring-primary-2"
              placeholder="525.50"
            />
            <button className="flex-1 flex items-center justify-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium">
              <span>Send</span>
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
