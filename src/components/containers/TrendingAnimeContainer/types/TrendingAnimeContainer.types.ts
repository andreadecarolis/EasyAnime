import { Anime } from "@/types/common.types";
import { PropsWithChildren } from "react";

export type TrendingAnimeContainerProps = PropsWithChildren & {
  animeList: Anime[];
};
