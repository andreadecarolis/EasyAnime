import useRoute from "@/hooks/useRoute";
import { AnimeCardGenres, AnimeCardRating, AnimeCardStatus } from "./widget";
import { AnimeCardProps } from "./types/AnimeCard.types";
import { Tv2 } from "lucide-react";
import "./AnimeCard.scss";

const AnimeCard: React.FC<AnimeCardProps> = ({ anime, orientation = "vertical" }) => {
  const { goToAnime } = useRoute();

  const title = anime.title.english || anime.title.romaji;

  return orientation === "vertical" ? (
    <div
      onClick={() => goToAnime(anime.id)}
      className="flex flex-col p-4 gap-y-3 rounded-xl shadow-xl bg-zinc-600/10 border border-zinc-800 text-zinc-100 transition-all duration-300 cursor-pointer hover:bg-zinc-600/30"
    >
      <img
        src={anime.coverImage.large}
        alt={title}
        title={title}
        className="w-full h-72 mb-2 rounded-xl object-cover"
      />
      <h3 className="text-lg font-semibold text-center truncate">{title}</h3>
      <div className="h-8">
        <div className="flex flex-nowrap justify-center gap-1 text-xs">
          <AnimeCardGenres genres={anime.genres.slice(0, 3)} />
        </div>
      </div>
      <div className="flex items-center justify-between mt-1 text-zinc-400 text-sm">
        <div className="flex items-center gap-1">
          <Tv2 size={14} />
          <span>
            {anime.episodes ?? "N/A"} {anime.episodes === 1 ? "episode" : "episodes"}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <AnimeCardStatus status={anime.status} />
        </div>
      </div>
      <div className="mt-2 text-zinc-400 text-xs">
        <AnimeCardRating averageScore={anime.averageScore ?? 0} />
      </div>
    </div>
  ) : (
    <div
      onClick={() => goToAnime(anime.id)}
      className="flex items-center px-3 py-2 gap-3 rounded-xl text-zinc-100 transition-all duration-300 cursor-pointer hover:bg-zinc-700/80"
    >
      <img src={anime.coverImage.medium} alt={title} title={title} className="w-12 h-16 rounded-xl object-cover" />
      <div className="w-full text-sm">
        <h4 className="font-semibold">{title}</h4>
        <div className="flex items-center justify-between mt-1 text-zinc-400 text-sm">
          <div className="flex items-center gap-1">
            <Tv2 size={14} />
            <span>
              {anime.episodes ?? "N/A"} {anime.episodes === 1 ? "episode" : "episodes"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <AnimeCardStatus status={anime.status} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
