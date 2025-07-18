import { AnimeCardRatingProps } from "./types/AnimeCardRating.types";
import { Star, StarHalf } from "lucide-react";
import "./AnimeCardRating.scss";

const AnimeCardRating: React.FC<AnimeCardRatingProps> = ({ averageScore }) => {
  const stars = Math.round((averageScore / 100) * 10) / 2;
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;

  return (
    <div className="mt-2 text-xs">
      <div className="flex justify-between text-zinc-400 mb-1">
        <span>Valutazione</span>
        <span>{averageScore ? `${((averageScore / 100) * 5).toFixed(1)} / 5` : "N/A"}</span>
      </div>
      <div className="flex items-center gap-0.5 text-amber-400">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} size={16} fill="currentColor" strokeWidth={0} />
        ))}
        {hasHalfStar && <StarHalf size={16} fill="currentColor" strokeWidth={0} />}
        {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map((_, i) => (
          <Star key={`empty-${i}`} size={16} className="text-zinc-500" />
        ))}
      </div>
    </div>
  );
};

export default AnimeCardRating;
