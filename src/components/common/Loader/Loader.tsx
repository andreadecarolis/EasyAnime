import { LoaderProps } from "./types/Loader.types";
import { Loader as LoaderIcon } from "lucide-react";
import "./Loader.scss";

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <LoaderIcon className="animate-spin w-6 h-6 text-primary" />
    </div>
  );
};

export default Loader;
