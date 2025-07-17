/* #region anime */
export type Anime = {
  id: number;
  title: AnimeTitle;
  coverImage: AnimeCoverImage;
};

export type AnimeTitle = {
  romaji?: string;
  english?: string;
  native?: string;
  userPreferred?: string;
};

export type AnimeCoverImage = {
  extraLarge?: string;
  large?: string;
  medium?: string;
  color?: string;
};
/* #endregion */
