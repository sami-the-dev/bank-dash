"use client";
import { BellDot, Search, Settings, Menu } from "lucide-react";
import Image from "next/image";
import profileImage from "../../public/profile.jpg";
import { usePathname } from "next/navigation";
import { COLORS } from "@/constants";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-background ">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex gap-4 items-center">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} className="text-primary-2" />
          </button>
          <p className="text-2xl font-normal text-primary-2">
            {pathname === "/"
              ? "Dashboard"
              : pathname.replace("/", "")[0]?.toLocaleUpperCase() +
                pathname.replace("/", "").slice(1).replace(/-/g, " ")}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-4 " />
            <input
              type="text"
              placeholder="Search for something"
              className="bg-light-gray h-10 w-64 rounded-full   pl-10 pr-4 text-sm placeholder:text-primary-4 focus:outline-none focus:ring-2 focus:ring-primary-4"
            />
          </div>

          <button
            className="hidden sm:flex h-10 w-10 bg-light-gray hover:bg-muted hover:cursor-pointer
           items-center justify-center rounded-full transition-colors"
          >
            <Settings className="h-5 w-5 text-primary-4" />
          </button>

          <div className="bg-light-gray rounded-full p-2 hover:bg-muted transition-colors cursor-pointer relative hidden sm:block">
            <BellDot
              className="h-6 w-6  text-secondary-2"
              color={COLORS.secondary2}
            />
          </div>

          <button className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-muted hover:opacity-80 transition-opacity">
            <Image
              width={40}
              height={40}
              src={profileImage}
              alt="Profile"
              className="h-full w-full rounded-full object-cover object-top-right"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
