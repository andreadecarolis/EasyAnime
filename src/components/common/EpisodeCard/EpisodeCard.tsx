import { EpisodeCardProps } from "./types/EpisodeCard.types";
import { convertTimestampToDate } from "@/utils/common.utils";
import "./EpisodeCard.scss";

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  const anime = episode.media;
  const title = anime.title.english || anime.title.romaji;

  return (
    <div
      key={anime.id + episode.episode}
      className="flex items-start p-4 gap-4 rounded-xl shadow-xl scale-[0.99] bg-zinc-600/10 border border-zinc-800 text-zinc-100 transition-all duration-300 hover:scale-[1.00] hover:bg-zinc-600/30"
    >
      <img src={anime.coverImage.large} alt={title} title={title} className="w-20 h-28 rounded-lg object-cover" />
      <div className="h-full flex flex-col justify-between">
        <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
        <p className="mt-1 text-zinc-400 text-sm">
          Episode {episode.episode} • {convertTimestampToDate(episode.airingAt)}
        </p>
      </div>
    </div>
  );
};

export default EpisodeCard;
