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
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { X } from "lucide-react";

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

interface SidePanelProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const SidePanel = ({ isOpen = false, onClose }: SidePanelProps) => {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 flex h-screen w-64 flex-col border-r border-border bg-background transition-transform duration-300 lg:sticky lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 py-6">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Image width={36} height={36} alt="logo" src={logo} />
            <span className="text-xl font-black text-primary-2">
              Bank Dash.
            </span>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={20} className="text-primary-2" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-2">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredLink === link.href;

              return (
                <li key={link.href} className="relative text-gray">
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
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
    </>
  );
};

export default SidePanel;
