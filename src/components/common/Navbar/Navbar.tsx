import { motion } from "framer-motion";
import { NavbarProps } from "./types/Navbar.types";
import { Search } from "lucide-react";
import logoImg from "../../../assets/images/logo.png";

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-[80%] sticky mx-auto top-6 px-6 py-4 rounded-xl shadow-xl bg-zinc-700/10 backdrop-blur-xs border border-zinc-800 z-50"
    >
      <div className="flex items-center justify-between">
        <h1>
          <img src={logoImg} alt="EasyAnime" title="EasyAnime" className="w-20" />
        </h1>
        <div className="w-full max-w-sm relative">
          <input
            type="text"
            placeholder="Cerca un anime..."
            className="w-full pl-10 pr-4 py-2 rounded-xl shadow-xl bg-zinc-600/10 border border-zinc-800 text-zinc-100 transition-all duration-300 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400" size={20} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
