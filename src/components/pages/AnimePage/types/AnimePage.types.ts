import { PropsWithChildren } from "react";
import { Anime } from "@/types/common.types";

export type AnimePageProps = PropsWithChildren & {
  anime: Anime;
};
