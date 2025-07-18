import { NavbarProps } from "./types/Navbar.types";
import { Search } from "lucide-react";
import logoImg from "@/assets/images/logo.png";

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="w-[80%] sticky mx-auto px-6 py-4 rounded-xl shadow-xl bg-zinc-700/10 backdrop-blur-xs border border-zinc-800 z-50">
      <div className="flex items-center justify-between">
        <img src={logoImg} alt="EasyAnime" title="EasyAnime" className="w-20" />
        <div className="w-full max-w-sm relative">
          <input
            type="text"
            placeholder="Search for an anime..."
            className="w-full pl-10 pr-4 py-2 rounded-xl shadow-xl bg-zinc-600/10 border border-zinc-800 text-zinc-100 transition-all duration-300 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400" size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
