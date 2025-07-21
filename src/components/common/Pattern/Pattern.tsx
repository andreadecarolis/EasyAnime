import { PatternProps } from "./types/Pattern.types";
import patternImg from "@/assets/images/pattern.png";
import "./Pattern.scss";

const Pattern: React.FC<PatternProps> = () => {
  return (
    <div
      className="w-full h-full absolute top-0 left-0 bg-repeat bg-[length:85px] opacity-[0.1] pointer-events-none z-0"
      style={{
        backgroundImage: `url(${patternImg})`,
      }}
    />
  );
};

export default Pattern;
