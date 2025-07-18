import { Anime, Episode } from "@/types/common.types";

/* #region anime */
export const filterByPopularity = (anime: Anime) => {
  return (anime?.popularity ?? 0) >= 50000;
};

export const filterAnimeListByPopularity = (list: Anime[]): Anime[] => {
  return list.filter((anime) => filterByPopularity(anime));
};

export const filterEpisodeListByPopularity = (list: Episode[]): Episode[] => {
  return list.filter((episode) => filterByPopularity(episode.media));
};
/* #endregion */

/* #region datetime */
export const getCurrentSeason = (): string => {
  const month = new Date().getMonth() + 1;
  return month >= 1 && month <= 3
    ? "WINTER"
    : month >= 4 && month <= 6
    ? "SPRING"
    : month >= 7 && month <= 9
    ? "SUMMER"
    : "FALL";
};

export const convertTimestampToDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString(navigator.language || "en-US", { dateStyle: "short", timeStyle: "short" });
};
/* #endregion */
