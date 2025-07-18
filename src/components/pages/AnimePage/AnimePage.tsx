import { useDispatch } from "react-redux";
import { AnimeCardGenres, AnimeCardRating, AnimeCardStatus } from "@/components/common/AnimeCard/widget";
import { AnimePageProps } from "./types/AnimePage.types";
import { setSelectedAnime } from "@/store/app/appSlice";
import { ArrowLeftCircle, Tv2 } from "lucide-react";
import "./AnimePage.scss";

// TODO: refactor

const AnimePage: React.FC<AnimePageProps> = ({ anime }) => {
  const dispatch = useDispatch();

  const title = anime.title.english || anime.title.romaji;

  /* #region handlers */
  const handleHomePageClick = () => {
    dispatch(setSelectedAnime(null));
  };
  /* #endregion */

  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <span
          className="text-zinc-100 font-semibold cursor-pointer flex items-center gap-1"
          onClick={handleHomePageClick}
        >
          <ArrowLeftCircle size={20} className="icon" /> Home
        </span>
        <span className="text-zinc-400 font-normal">/ {title}</span>
      </div>

      <div className="px-6 py-4 mt-6 rounded-xl shadow-xl bg-zinc-700/10 backdrop-blur-xs border border-zinc-800 text-zinc-100">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={anime.coverImage.extraLarge}
            alt={title}
            title={title}
            className="w-full max-w-xs rounded-xl object-cover"
          />
          <div className="flex flex-col gap-4 flex-1">
            <h1 className="text-3xl font-semibold text-primary">{title}</h1>
            {anime.description && (
              <p
                className="text-sm text-zinc-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: anime.description }}
              />
            )}
            <div>
              <h2 className="text-sm text-zinc-400 mb-1">Genres</h2>
              <div className="flex flex-nowrap justify-start gap-1 text-xs">
                <AnimeCardGenres genres={anime.genres.slice(0, 5)} />
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-1">
                <Tv2 size={16} />
                <span>
                  {anime.episodes ?? "N/A"} {anime.episodes === 1 ? "episode" : "episodes"}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <AnimeCardStatus status={anime.status} />
              </div>
            </div>
            <AnimeCardRating averageScore={anime.averageScore ?? 0} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimePage;
