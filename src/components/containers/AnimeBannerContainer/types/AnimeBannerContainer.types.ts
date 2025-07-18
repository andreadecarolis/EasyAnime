import { PropsWithChildren } from "react";
import { Anime } from "@/types/common.types";

export type AnimeBannerContainerProps = PropsWithChildren & {
  anime: Anime;
};
