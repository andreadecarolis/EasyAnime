import { motion } from "framer-motion";
import { NavbarProps } from "./types/Navbar.types";
import { Search } from "lucide-react";
import logoImg from "../../../assets/images/logo.png";

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-[80%] mx-auto top-4 px-6 py-4 backdrop-blur-md bg-zinc-900/40 border border-white/10 rounded-xl shadow-xl sticky z-50"
    >
      <div className="flex items-center justify-between">
        <img src={logoImg} alt="EasyAnime" title="EasyAnime" className="w-20" />
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Cerca un anime..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-white/10 bg-zinc-800/50 text-zinc-100 placeholder:text-zinc-400 backdrop-blur focus:outline-none focus:ring-2 focus:ring-[#ebbe8f] transition-all duration-300"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
