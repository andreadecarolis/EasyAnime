import { AnimeCardGenresProps } from "./types/AnimeCardGenres.types";
import "./AnimeCardGenres.scss";

const AnimeCardGenres: React.FC<AnimeCardGenresProps> = ({ genres }) => {
  return (
    <div className="flex flex-nowrap justify-center gap-1 text-xs">
      {genres.map((genre: string) => (
        <span key={genre} className="px-2 py-0.5 rounded-full bg-zinc-800/50 border border-zinc-700 text-zinc-400">
          {genre}
        </span>
      ))}
    </div>
  );
};

export default AnimeCardGenres;
