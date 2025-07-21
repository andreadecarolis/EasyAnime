import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { AnimeCard } from "@/components/common";
import { Anime } from "@/types/common.types";
import { AnimeCarouselProps } from "./types/AnimeCarousel.types";
import "swiper/css";
import "swiper/css/autoplay";
import "./AnimeCarousel.scss";

const AnimeCarousel: React.FC<AnimeCarouselProps> = ({ animeList, options }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={options?.spaceBetween ?? 16}
      slidesPerView={options?.slidesPerView ?? 5}
      autoplay={{ delay: options?.delay ?? 3000 }}
      loop={options?.loop ?? true}
      className={options?.className ?? "mt-8"}
    >
      {animeList.map((anime: Anime) => (
        <SwiperSlide key={anime.id}>
          <AnimeCard anime={anime} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AnimeCarousel;
