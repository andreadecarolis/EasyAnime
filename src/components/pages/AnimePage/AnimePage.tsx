import { useDispatch } from "react-redux";
import { AnimeCardGenres, AnimeCardRating, AnimeCardStatus } from "@/components/common/AnimeCard/widget";
import { AnimePageProps } from "./types/AnimePage.types";
import { convertSlugsToDate, convertTimestampToDate, getTrailerUrl } from "@/utils/common.utils";
import { setSelectedAnime } from "@/store/app/appSlice";
import { ArrowLeftCircle } from "lucide-react";
import "./AnimePage.scss";

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
        <div className="flex">
          <div className="w-1/3">
            <img
              src={anime.coverImage.extraLarge}
              alt={title}
              title={title}
              className="w-full max-w-xs rounded-xl object-cover"
            />
          </div>
          <div className="w-2/3 flex gap-x-2">
            <div className="w-1/2 flex flex-col gap-y-3">
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">Romaji</span>
                <span>{anime.title.romaji || "N/A"}</span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">English</span>
                <span>{anime.title.english || "N/A"}</span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">Original</span>
                <span>{anime.title.native || "N/A"}</span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">Genres</span>
                <span className="flex items-center gap-1 text-xs">
                  <AnimeCardGenres genres={anime.genres.slice(0, 3)} />
                </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">Episodes</span>
                <span>
                  {anime.episodes ?? "N/A"} {anime.episodes === 1 ? "episode" : "episodes"}
                </span>
              </div>
              {anime.nextAiringEpisode && (
                <div className="flex flex-col gap-y-1">
                  <span className="font-semibold">Next episode</span>
                  <span>
                    Episode {anime.nextAiringEpisode.episode} -{" "}
                    {convertTimestampToDate(anime.nextAiringEpisode.airingAt)}
                  </span>
                </div>
              )}
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">Status</span>
                <span className="flex items-center gap-x-2">
                  <AnimeCardStatus status={anime.status} />
                </span>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              {anime.trailer && (
                <div className="flex flex-col gap-y-1">
                  <span className="font-semibold">Trailer</span>
                  <div
                    className="h-64 rounded-xl shadow-xl border border-zinc-800 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${anime.trailer.thumbnail})`,
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center p-4 bg-zinc-950/50">
                      <a
                        href={getTrailerUrl(anime.trailer) ?? "#"}
                        type="button"
                        target="_blank"
                        className="px-6 py-3 rounded-xl backdrop-blur-xs border border-zinc-100/10 bg-zinc-100/10 font-semibold transition-all duration-300 cursor-pointer hover:bg-zinc-100/20"
                      >
                        Watch now
                      </a>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">Release date</span>
                <span>{convertSlugsToDate(anime.startDate.year, anime.startDate.month, anime.startDate.day)}</span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">Rating</span>
                <span>
                  <AnimeCardRating averageScore={anime.averageScore ?? 0} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimePage;
