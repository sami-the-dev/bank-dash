import { BellDot, Search, Settings } from "lucide-react";
import Image from "next/image";
import profileImage from "../../public/profile.jpg";

const Header = () => {
  return (
    <header className="border-b border-border bg-background ">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex gap-8 items-center">
          {/* Middle Section: Overview Header */}
          <p className="text-2xl font-normal text-primary-2">Overview</p>
        </div>

        {/* Right Section: Profile, Notifications, Settings, Search */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-4 " />
            <input
              type="text"
              placeholder="Search for something"
              className="bg-light-gray h-10 w-64 rounded-full   pl-10 pr-4 text-sm placeholder:text-primary-4 focus:outline-none focus:ring-2 focus:ring-primary-4"
            />
          </div>

          {/* Settings Icon */}
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted transition-colors">
            <Settings className="h-5 w-5 text-primary-4" />
          </button>

          {/* Notification Bell */}
          <BellDot className="h-6 w-6 text-secondary-2" color="#fe5c73" />

          {/* Profile Picture */}
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
