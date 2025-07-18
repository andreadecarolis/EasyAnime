import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { AnimeCard, Loader } from "@/components/common";
import { Anime } from "@/types/common.types";
import { PopularAnimeContainerProps } from "./types/PopularAnimeContainer.types";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/autoplay";
import "./PopularAnimeContainer.scss";

const PopularAnimeContainer: React.FC<PopularAnimeContainerProps> = ({ animeList }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-6 py-4 rounded-xl shadow-xl bg-zinc-700/10 backdrop-blur-xs border border-zinc-800"
    >
      <h2 className="text-primary text-2xl font-semibold">
        Anime scelti dagli utenti <Star className="inline-block" />
      </h2>
      {animeList.length ? (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={15}
          slidesPerView={5}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="mt-8"
        >
          {animeList.map((anime: Anime) => (
            <SwiperSlide key={anime.id}>
              <AnimeCard anime={anime} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
};

export default PopularAnimeContainer;
