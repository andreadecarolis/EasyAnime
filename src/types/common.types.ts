import { z } from "zod";
import { HttpResponseSchema } from "./httpRequest.types";

/* #region anime */
export const AnimeTitleSchema = z.object({
  romaji: z.string(),
  english: z.string().nullable(),
  native: z.string().nullable(),
});
export type AnimeTitle = z.infer<typeof AnimeTitleSchema>;

export const AnimeStatusSchema = z.enum(["FINISHED", "RELEASING", "NOT_YET_RELEASED", "CANCELLED", "HIATUS"]);
export type AnimeStatus = z.infer<typeof AnimeStatusSchema>;

export const AnimeNextAiringEpisodeSchema = z.object({
  airingAt: z.number(),
  timeUntilAiring: z.number(),
  episode: z.number(),
});
export type AnimeNextAiringEpisode = z.infer<typeof AnimeNextAiringEpisodeSchema>;

export const AnimeStudiosSchema = z.object({
  nodes: z.array(z.object({ name: z.string() })),
});
export type AnimeStudios = z.infer<typeof AnimeStudiosSchema>;

export const AnimeStartDateSchema = z.object({
  year: z.number(),
  month: z.number(),
  day: z.number(),
});
export type AnimeStartDate = z.infer<typeof AnimeStartDateSchema>;

export const AnimeEndDateSchema = z.object({
  year: z.number().nullable(),
  month: z.number().nullable(),
  day: z.number().nullable(),
});
export type AnimeEndDate = z.infer<typeof AnimeEndDateSchema>;

export const AnimeCoverImageSchema = z.object({
  extraLarge: z.string(),
  large: z.string(),
  medium: z.string(),
});
export type AnimeCoverImage = z.infer<typeof AnimeCoverImageSchema>;

export const AnimeTrailerSchema = z.object({
  id: z.string(),
  site: z.string(),
  thumbnail: z.string(),
});
export type AnimeTrailer = z.infer<typeof AnimeTrailerSchema>;

export const AnimeSchema = z.object({
  id: z.number(),
  title: AnimeTitleSchema,
  description: z.string().nullable(),
  status: AnimeStatusSchema,
  genres: z.array(z.string()),
  averageScore: z.number().nullable(),
  popularity: z.number().nullable(),
  episodes: z.number().nullable(),
  nextAiringEpisode: AnimeNextAiringEpisodeSchema.nullable(),
  studios: AnimeStudiosSchema.nullable(),
  startDate: AnimeStartDateSchema,
  endDate: AnimeEndDateSchema,
  coverImage: AnimeCoverImageSchema,
  bannerImage: z.string().nullable(),
  trailer: AnimeTrailerSchema.nullable(),
});
export type Anime = z.infer<typeof AnimeSchema>;

export const EpisodeShema = z.object({
  airingAt: z.number(),
  episode: z.number(),
  media: AnimeSchema,
});
export type Episode = z.infer<typeof EpisodeShema>;
/* #endregion */

/* #region getTrendingAnimeList */
export const GetTrendingAnimeListPayloadSchema = z.object({});
export type GetTrendingAnimeListPayload = z.infer<typeof GetTrendingAnimeListPayloadSchema>;

export const GetTrendingAnimeListResponseSchema = HttpResponseSchema.extend({
  data: z.object({
    Page: z.object({
      media: z.array(AnimeSchema),
    }),
  }),
});
export type GetTrendingAnimeListResponse = z.infer<typeof GetTrendingAnimeListResponseSchema>;
/* #endregion */

/* #region getPopularAnimeList */
export const GetPopularAnimeListPayloadSchema = z.object({});
export type GetPopularAnimeListPayload = z.infer<typeof GetPopularAnimeListPayloadSchema>;

export const GetPopularAnimeListResponseSchema = HttpResponseSchema.extend({
  data: z.object({
    Page: z.object({
      media: z.array(AnimeSchema),
    }),
  }),
});
export type GetPopularAnimeListResponse = z.infer<typeof GetPopularAnimeListResponseSchema>;
/* #endregion */

/* #region getAiringSoonEpisodeList */
export const GetAiringSoonEpisodeListPayloadSchema = z.object({});
export type GetAiringSoonEpisodeListPayload = z.infer<typeof GetAiringSoonEpisodeListPayloadSchema>;

export const GetAiringSoonEpisodeListResponseSchema = HttpResponseSchema.extend({
  data: z.object({
    Page: z.object({
      airingSchedules: z.array(EpisodeShema),
    }),
  }),
});
export type GetAiringSoonEpisodeListResponse = z.infer<typeof GetAiringSoonEpisodeListResponseSchema>;
/* #endregion */

/* #region getSearchAnimeList */
export type GetSearchAnimeListArgs = { searchTerm: string };

export const GetSearchAnimeListPayloadSchema = z.object({});
export type GetSearchAnimeListPayload = z.infer<typeof GetSearchAnimeListPayloadSchema>;

export const GetSearchAnimeListResponseSchema = HttpResponseSchema.extend({
  data: z.object({
    Page: z.object({
      media: z.array(AnimeSchema),
    }),
  }),
});
export type GetSearchAnimeListResponse = z.infer<typeof GetSearchAnimeListResponseSchema>;
/* #endregion */
