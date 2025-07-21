import { AnimeCarousel } from "@/components/common";
import { TrendingAnimeContainerProps } from "./types/TrendingAnimeContainer.types";
import "./TrendingAnimeContainer.scss";

const TrendingAnimeContainer: React.FC<TrendingAnimeContainerProps> = ({ animeList }) => {
  return (
    <div className="px-6 py-4 rounded-xl shadow-xl bg-zinc-700/10 backdrop-blur-xs border border-zinc-800">
      <h2 className="text-primary text-2xl font-semibold">Trending anime</h2>
      {animeList.length ? (
        <AnimeCarousel animeList={animeList} />
      ) : (
        <div className="flex justify-start items-center mt-4 text-zinc-400">Anime not found</div>
      )}
    </div>
  );
};

export default TrendingAnimeContainer;
