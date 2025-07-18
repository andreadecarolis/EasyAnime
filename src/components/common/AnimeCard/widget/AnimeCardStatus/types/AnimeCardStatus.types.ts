import { PropsWithChildren } from "react";
import { AnimeStatus } from "@/types/common.types";

export type AnimeCardStatusProps = PropsWithChildren & {
  status: AnimeStatus;
};
