import { motion } from "framer-motion";
import { HomePageProps } from "./types/HomePage.types";
import { Flame } from "lucide-react";
import "./HomePage.scss";

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-6 py-4 backdrop-blur-md bg-zinc-900/40 border border-white/10 rounded-xl shadow-xl"
    >
      <h2 className="text-[#ebbe8f] font-semibold text-2xl">
        Anime del momento <Flame className="inline-block" />
      </h2>
    </motion.div>
  );
};

export default HomePage;
