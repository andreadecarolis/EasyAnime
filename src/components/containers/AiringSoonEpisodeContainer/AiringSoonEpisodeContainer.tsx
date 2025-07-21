import { EpisodeCard } from "@/components/common";
import { AiringSoonEpisodeContainerProps } from "./types/AiringSoonEpisodeContainer.types";
import "./AiringSoonEpisodeContainer.scss";

const AiringSoonEpisodeContainer: React.FC<AiringSoonEpisodeContainerProps> = ({ episodeList }) => {
  return (
    <div className="px-6 py-4 rounded-xl shadow-xl bg-zinc-700/10 backdrop-blur-xs border border-zinc-800">
      <h2 className="text-primary text-2xl font-semibold">Airing soon episodes</h2>
      {episodeList.length ? (
        <div className="grid grid-cols-4 mt-8 gap-4">
          {episodeList.map((episode) => (
            <EpisodeCard key={episode.media.id + episode.episode} episode={episode} />
          ))}
        </div>
      ) : (
        <div className="h-32 flex justify-center items-center text-primary">Episodes not found</div>
      )}
    </div>
  );
};

export default AiringSoonEpisodeContainer;
