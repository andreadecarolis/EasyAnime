import { LoaderProps } from "./types/Loader.types";
import loaderImg from "@/assets/images/loader.png";
import "./Loader.scss";

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-zinc-950">
      <img
        src={loaderImg}
        alt="Loader"
        title="Loader"
        className="w-20 animate-spin"
        style={{ animationDuration: "2s" }}
      />
    </div>
  );
};

export default Loader;
