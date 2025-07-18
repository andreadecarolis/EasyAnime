import { z } from "zod";
import { HttpResponseSchema } from "./httpRequest.types";

/* #region anime */
export const AnimeTitleSchema = z.object({
  romaji: z.string(),
  english: z.string().nullable(),
  native: z.string(),
});
export type AnimeTitle = z.infer<typeof AnimeTitleSchema>;

export const AnimeStatusSchema = z.enum(["FINISHED", "RELEASING", "NOT_YET_RELEASED", "CANCELLED", "HIATUS"]);
export type AnimeStatus = z.infer<typeof AnimeStatusSchema>;

export const AnimeCoverImageSchema = z.object({
  extraLarge: z.string(),
  large: z.string(),
  medium: z.string(),
});
export type AnimeCoverImage = z.infer<typeof AnimeCoverImageSchema>;

export const AnimeSchema = z.object({
  id: z.number(),
  title: AnimeTitleSchema,
  status: AnimeStatusSchema,
  genres: z.array(z.string()),
  averageScore: z.number().nullable(),
  episodes: z.number().nullable(),
  coverImage: AnimeCoverImageSchema,
});
export type Anime = z.infer<typeof AnimeSchema>;
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

/* #region getPopularAnimeList */
export const GetLatestAnimeListPayloadSchema = z.object({});
export type GetLatestAnimeListPayload = z.infer<typeof GetLatestAnimeListPayloadSchema>;

export const GetLatestAnimeListResponseSchema = HttpResponseSchema.extend({
  data: z.object({
    Page: z.object({
      media: z.array(AnimeSchema),
    }),
  }),
});
export type GetLatestAnimeListResponse = z.infer<typeof GetLatestAnimeListResponseSchema>;
/* #endregion */
