import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { LatestAnimeContainer, PopularAnimeContainer, TrendingAnimeContainer } from "@/components/containers";
import { HomePageProps } from "./types/HomePage.types";
import "./HomePage.scss";
import {
  getLatestAnimeListRequest,
  getPopularAnimeListRequest,
  getTrendingAnimeListRequest,
} from "@/store/app/appSlice";

const HomePage: React.FC<HomePageProps> = () => {
  const { trendingAnimeList, popularAnimeList, latestAnimeList } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingAnimeListRequest());
    dispatch(getPopularAnimeListRequest());
    dispatch(getLatestAnimeListRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-y-6">
      <TrendingAnimeContainer animeList={trendingAnimeList} />
      <PopularAnimeContainer animeList={popularAnimeList} />
      <LatestAnimeContainer animeList={latestAnimeList} />
    </div>
  );
};

export default HomePage;
