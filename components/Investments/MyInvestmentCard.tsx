import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MyInvestmentCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  investmentValue: string;
  returnValue: string;
  isPositive: boolean;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  valueClassName?: string;
  returnClassName?: string;
}

export default function MyInvestmentCard({
  icon,
  title,
  subtitle,
  investmentValue,
  returnValue,
  isPositive,
}: MyInvestmentCardProps) {
  return (
    <Card className={cn("flex items-center gap-4 p-6")}>
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-2xl shrink-0",
          title.includes("Apple Store")
            ? "bg-red-100"
            : title.includes("Samsung")
            ? "bg-paleBlue"
            : "bg-cream"
        )}
      >
        {icon}
      </div>
      <div className="flex-1 flex items-center justify-between">
        <div>
          <p className={cn("text-base font-semibold text-primary-2 mb-1")}>
            {title}
          </p>
          <p className={cn("text-sm text-primary-4")}>{subtitle}</p>
        </div>
        <div className="text-left">
          <p className={cn("text-base font-semibold text-primary-2 mb-1")}>
            {investmentValue}
          </p>
          <p className="text-sm text-primary-4">Investment Value</p>
        </div>
        <div className="text-left">
          <p
            className={cn(
              "text-base font-semibold mb-1",
              isPositive ? "text-green-600" : "text-red-600"
            )}
          >
            {returnValue}
          </p>
          <p className="text-sm text-primary-4">Return Value</p>
        </div>
      </div>
    </Card>
  );
}
