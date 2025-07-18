import { PropsWithChildren } from "react";
import { Episode } from "@/types/common.types";

export type EpisodeCardProps = PropsWithChildren & {
  episode: Episode;
};
