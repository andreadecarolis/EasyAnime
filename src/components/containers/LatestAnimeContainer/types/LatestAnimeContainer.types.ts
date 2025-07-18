import { PropsWithChildren } from "react";
import { Anime } from "@/types/common.types";

export type LatestAnimeContainerProps = PropsWithChildren & {
  animeList: Anime[];
};
