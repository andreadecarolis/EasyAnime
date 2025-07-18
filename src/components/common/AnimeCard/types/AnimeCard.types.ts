import { Anime } from "@/types/common.types";
import { PropsWithChildren } from "react";

export type AnimeCardProps = PropsWithChildren & {
  anime: Anime;
  orientation?: "vertical" | "horizontal";
};
