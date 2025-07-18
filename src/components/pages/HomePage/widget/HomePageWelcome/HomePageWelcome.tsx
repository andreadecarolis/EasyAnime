import { HomePageWelcomeProps } from "./types/HomePageWelcome.types";
import mascotteImg from "@/assets/images/mascotte.png";
import "./HomePageWelcome.scss";

const HomePageWelcome: React.FC<HomePageWelcomeProps> = () => {
  return (
    <div className="flex flex-row items-center justify-center mb-2">
      <img src={mascotteImg} alt="Marin Kitagawa" title="Marin Kitagawa" className="w-48 z-10" />
      <div className="max-w-lg pl-20 space-y-4 text-white text-left">
        <h1 className="text-primary text-3xl font-bold">Welcome to EasyAnime</h1>
        <p className="text-zinc-400 text-lg">
          Your easiest way into the anime universe.
          <br />
          Simple, fast, and made for everyone.
        </p>
        <button
          type="button"
          className="px-6 py-3 rounded-xl backdrop-blur-xs border border-zinc-100/10 bg-zinc-100/10 font-semibold transition-al cursor-pointer duration-300 hover:bg-zinc-100/20"
        >
          Explore now
        </button>
      </div>
    </div>
  );
};

export default HomePageWelcome;
