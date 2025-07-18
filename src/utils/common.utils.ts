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
/* #endregion */
