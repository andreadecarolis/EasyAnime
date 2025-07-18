import { AnimeCardGenresProps } from "./types/AnimeCardGenres.types";
import "./AnimeCardGenres.scss";

const AnimeCardGenres: React.FC<AnimeCardGenresProps> = ({ genres }) => {
  return (
    <>
      {genres.map((genre: string) => (
        <button
          key={genre}
          className="px-2 py-0.5 rounded-xl backdrop-blur-xs border border-zinc-100/10 bg-zinc-100/10 transition-all duration-300 hover:bg-zinc-100/20"
        >
          {genre}
        </button>
      ))}
    </>
  );
};

export default AnimeCardGenres;
