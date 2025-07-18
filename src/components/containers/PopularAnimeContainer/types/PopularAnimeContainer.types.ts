import { PropsWithChildren } from "react";
import { Anime } from "@/types/common.types";

export type PopularAnimeContainerProps = PropsWithChildren & {
  animeList: Anime[];
};
