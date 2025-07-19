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
  nextAiringEpisode {
    airingAt
    timeUntilAiring
    episode
  }
  studios {
    nodes {
      name
    }
  }
  startDate {
    year
    month
    day
  }
  endDate {
    year
    month
    day
  }
  coverImage {
    extraLarge
    large
    medium
  }
  bannerImage
  trailer {
    id
    site
    thumbnail
  }
`;
/* #endregion */
