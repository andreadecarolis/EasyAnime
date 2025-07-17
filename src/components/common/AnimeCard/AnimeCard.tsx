import { AnimeCardProps } from "./types/AnimeCard.types";
import "./AnimeCard.scss";

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <div className="flex flex-col p-4 gap-y-2 rounded-xl shadow-xl bg-zinc-600/10 border border-zinc-800 text-zinc-100 transition-all duration-300 hover:bg-zinc-600/30">
      <img src={anime.img} alt={anime.title} title={anime.title} className="w-full h-72 mb-2 rounded-xl object-cover" />
      <h3 className="text-lg font-semibold text-center">{anime.title}</h3>
      <div className="flex flex-nowrap justify-center gap-2">
        {anime.genre.map((genre: string) => (
          <span key={genre} className="px-2 py-0.5 rounded-xl shadow-xl bg-primary text-zinc-950 text-xs">
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimeCard;
