import { Anime, AnimeTrailer, Episode } from "@/types/common.types";

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

export const getTrailerUrl = (trailer: AnimeTrailer): string | null => {
  switch (trailer.site.toLowerCase()) {
    case "youtube":
      return `https://www.youtube.com/watch?v=${trailer.id}`;
    case "dailymotion":
      return `https://www.dailymotion.com/video/${trailer.id}`;
    case "vimeo":
      return `https://vimeo.com/${trailer.id}`;
    default:
      return null;
  }
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
  return date.toLocaleString("it-IT", { dateStyle: "short", timeStyle: "short" });
};

export const convertSlugsToDate = (year: number, month: number, day: number): string => {
  const date = new Date(year, month - 1, day);
  return new Intl.DateTimeFormat(navigator.language || "en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).format(date);
};
/* #endregion */
