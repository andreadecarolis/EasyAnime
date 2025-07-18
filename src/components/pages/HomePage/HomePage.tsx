import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import {
  AiringSoonEpisodeContainer,
  AnimeBannerContainer,
  PopularAnimeContainer,
  TrendingAnimeContainer,
} from "@/components/containers";
import { HomePageWelcome } from "./widget";
import { Anime } from "@/types/common.types";
import { HomePageProps } from "./types/HomePage.types";
import {
  getAiringSoonEpisodeListRequest,
  getPopularAnimeListRequest,
  getTrendingAnimeListRequest,
} from "@/store/app/appSlice";
import "./HomePage.scss";

const HomePage: React.FC<HomePageProps> = () => {
  const { trendingAnimeList, popularAnimeList, airingSoonEpisodeList } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  const heroAnime: Anime | null = trendingAnimeList[0] ?? null;

  /* #region effects */
  useEffect(() => {
    dispatch(getTrendingAnimeListRequest());
    dispatch(getPopularAnimeListRequest());
    dispatch(getAiringSoonEpisodeListRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* #endregion */

  return (
    <div className="flex flex-col gap-y-6">
      {heroAnime && <AnimeBannerContainer anime={heroAnime} />}
      <TrendingAnimeContainer animeList={trendingAnimeList} />
      <HomePageWelcome />
      <PopularAnimeContainer animeList={popularAnimeList} />
      <AiringSoonEpisodeContainer episodeList={airingSoonEpisodeList} />
    </div>
  );
};

export default HomePage;
