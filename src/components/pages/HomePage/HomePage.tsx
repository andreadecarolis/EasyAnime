import { TrendingAnimeContainer } from "@/components/containers";
import { HomePageProps } from "./types/HomePage.types";
import "./HomePage.scss";

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <TrendingAnimeContainer />
    </>
  );
};

export default HomePage;
