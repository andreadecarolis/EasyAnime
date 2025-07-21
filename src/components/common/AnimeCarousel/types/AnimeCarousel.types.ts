import { PropsWithChildren } from "react";
import { Anime } from "@/types/common.types";

export type AnimeCarouselProps = PropsWithChildren & {
  animeList: Anime[];
  options?: {
    spaceBetween?: number;
    slidesPerView?: number;
    delay?: number;
    loop?: boolean;
    className?: string;
  };
};
