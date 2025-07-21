import { AnimeCarousel } from "@/components/common";
import { PopularAnimeContainerProps } from "./types/PopularAnimeContainer.types";
import "./PopularAnimeContainer.scss";

const PopularAnimeContainer: React.FC<PopularAnimeContainerProps> = ({ animeList }) => {
  return (
    <div className="px-6 py-4 rounded-xl shadow-xl bg-zinc-700/10 backdrop-blur-xs border border-zinc-800">
      <h2 className="text-primary text-2xl font-semibold">Anime choosen by the community</h2>
      {animeList.length ? (
        <AnimeCarousel animeList={animeList} />
      ) : (
        <div className="h-32 flex justify-center items-center text-primary">Anime not found</div>
      )}
    </div>
  );
};

export default PopularAnimeContainer;
