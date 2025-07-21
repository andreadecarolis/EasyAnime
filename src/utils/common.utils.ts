import { ANILIST_API_ANIME_REQUEST_FORMAT, ANILIST_API_URL } from "@/consts/common.consts";
import {
  Anime,
  AnimeTrailer,
  Episode,
  GetAnimeInfoPayload,
  GetAnimeInfoResponse,
  GetAnimeRecommendationsPayload,
  GetAnimeRecommendationsResponse,
  GetSearchAnimeListPayload,
  GetSearchAnimeListResponse,
} from "@/types/common.types";
import { fetchHttpRequest } from "./httpRequest.utils";

/* #region anime */
export const filterByPopularity = (anime: Anime) => {
  return (anime?.popularity ?? 0) >= 25000;
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

/* #region api */
export const getSearchAnimeList = async (payload: GetSearchAnimeListPayload): Promise<GetSearchAnimeListResponse> => {
  try {
    const response: any = await fetchHttpRequest({
      requestCode: ANILIST_API_URL,
      payload: {
        query: `
          query ($search: String) {
            Page(perPage: 10) {
              media(search: $search, type: ANIME, sort: SEARCH_MATCH) {
                ${ANILIST_API_ANIME_REQUEST_FORMAT}
              }
            }
          }
        `,
        variables: payload,
      },
    });
    return response.data.data.Page.media ?? [];
  } catch {
    return [];
  }
};

export const getAnimeInfo = async (payload: GetAnimeInfoPayload): Promise<GetAnimeInfoResponse> => {
  try {
    const response: any = await fetchHttpRequest({
      requestCode: ANILIST_API_URL,
      payload: {
        query: `
          query ($id: Int) {
            Media(id: $id, type: ANIME) {
              ${ANILIST_API_ANIME_REQUEST_FORMAT}
            }
          }
        `,
        variables: payload,
      },
    });
    return response.data.data.Media;
  } catch {
    return null;
  }
};

export const getAnimeRecommendations = async (
  payload: GetAnimeRecommendationsPayload,
): Promise<GetAnimeRecommendationsResponse> => {
  try {
    const response: any = await fetchHttpRequest({
      requestCode: ANILIST_API_URL,
      payload: {
        query: `
          query ($id: Int) {
            Media(id: $id, type: ANIME) {
              recommendations(sort: RATING_DESC, perPage: 5) {
                nodes {
                  mediaRecommendation {
                    ${ANILIST_API_ANIME_REQUEST_FORMAT}
                  }
                  rating
                }
              }
            }
          }
        `,
        variables: payload,
      },
    });
    return (
      response.data.data.Media?.recommendations?.nodes?.map(
        (recommendation: { mediaRecommendation: Anime; rating: number }) => recommendation.mediaRecommendation,
      ) ?? []
    );
  } catch {
    return [];
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
