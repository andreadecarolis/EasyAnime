import useRoute from "@/hooks/useRoute";
import { AnimeBannerContainerProps } from "./types/AnimeBannerContainer.types";
import "./AnimeBannerContainer.scss";

const AnimeBannerContainer: React.FC<AnimeBannerContainerProps> = ({ anime }) => {
  const { goToAnime } = useRoute();

  return (
    <div
      className="w-full h-[400px] relative overflow-hidden rounded-xl shadow-xl border border-zinc-800 bg-cover bg-center"
      style={{
        backgroundImage: `url(${anime.bannerImage})`,
      }}
    >
      <div className="absolute flex items-center px-10 py-6 inset-0 bg-gradient-to-r from-black/80 to-black/20 text-zinc-100">
        <div className="max-w-xl flex-1 space-y-4">
          <h1 className="drop-shadow-md text-4xl font-bold">{anime.title.english || anime.title.romaji}</h1>
          <p className="leading-relaxed line-clamp-4 text-sm text-zinc-400">
            {anime.description?.replace(/<[^>]*>/g, "")}
          </p>
          <button
            type="button"
            onClick={() => goToAnime(anime.id)}
            className="px-6 py-3 rounded-xl backdrop-blur-xs border border-zinc-100/10 bg-zinc-100/10 font-semibold transition-all duration-300 cursor-pointer hover:bg-zinc-100/20"
          >
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeBannerContainer;
