import { PropsWithChildren } from "react";
import { Episode } from "@/types/common.types";

export type AiringSoonEpisodeContainerProps = PropsWithChildren & {
  episodeList: Episode[];
};
