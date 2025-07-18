/* #region api */
export const ANILIST_API_URL = "https://graphql.anilist.co";

export const ANILIST_API_ANIME_REQUEST_FORMAT = `
  id
  title {
    romaji
    english
    native
  }
  description
  status
  genres
  averageScore
  popularity
  episodes
  coverImage {
    extraLarge
    large
    medium
  }
  bannerImage
`;
/* #endregion */
