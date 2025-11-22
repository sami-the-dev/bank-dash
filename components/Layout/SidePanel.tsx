"use client";
import logo from "../../public/logo.png";
import {
  HomeIcon,
  TransferIcon,
  AccountIcon,
  EconomicInvestmentIcon,
  CreditCardIcon,
  LoanIcon,
  ServiceIcon,
  SettingsIcon,
  EconometricsIcon,
} from "../icons";
import { COLORS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gift } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type IconComponent = React.ComponentType<{
  width: number;
  height: number;
  fill: string;
  className?: string;
}>;

type NavigationLink = {
  name: string;
  href: string;
  icon: IconComponent;
};

const navigationLinks: NavigationLink[] = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Transactions", href: "/transactions", icon: TransferIcon },
  { name: "Accounts", href: "/accounts", icon: AccountIcon },
  { name: "Investments", href: "/investments", icon: EconomicInvestmentIcon },
  { name: "Credit Cards", href: "/credit-cards", icon: CreditCardIcon },
  { name: "Loans", href: "/loans", icon: LoanIcon },
  { name: "Services", href: "/services", icon: ServiceIcon },
  { name: "My Privileges", href: "/privileges", icon: EconometricsIcon },
  { name: "Setting", href: "/settings", icon: SettingsIcon },
];

const SidePanel = () => {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);

  return (
    <aside className="sticky top-0 flex h-screen w-64 flex-col border-r border-border bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 space-between px-4 py-6">
        <Image width={36} height={36} alt="logo" src={logo} />
        <span className="text-xl font-black text-primary-2">Bank Dash.</span>
      </div>
      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <ul className="space-y-2">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            const isHovered = hoveredLink === link.href;

            return (
              <li key={link.href} className="relative text-gray">
                <Link
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={cn(
                    "group flex items-center gap-4 rounded-lg hover:text-primary-3  py-4 transition-all duration-200",
                    isActive && " text-primary-3 font-medium"
                  )}
                >
                  <span
                    className={cn(
                      isActive
                        ? "w-1.5 h-12 bg-primary-3 rounded-r-lg absolute -left-4"
                        : "hidden"
                    )}
                  ></span>
                  {(() => {
                    const Icon = link.icon;
                    return (
                      <Icon
                        width={20}
                        height={20}
                        fill={
                          isActive || isHovered
                            ? COLORS.primary3
                            : COLORS.mutedForeground
                        }
                        className={cn("shrink-0 transition-all")}
                      />
                    );
                  })()}
                  <span className="text-base">{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SidePanel;
