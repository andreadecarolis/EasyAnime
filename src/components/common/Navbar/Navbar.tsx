import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { AnimeCard } from "@/components/common";
import { Anime } from "@/types/common.types";
import { getSearchAnimeListRequest } from "@/store/app/appSlice";
import { Search } from "lucide-react";
import logoImg from "@/assets/images/logo.png";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const resultsRef = useRef<HTMLDivElement | null>(null);

  const { searchAnimeList } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  /* #region handlers */
  const handleSearchChange = _.debounce((value: string) => {
    setSearchTerm(value);
  }, 400);
  /* #endregion */

  /* #region effects */
  useEffect(() => {
    if (searchTerm.trim().length >= 3) {
      dispatch(getSearchAnimeListRequest({ searchTerm }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  /* #endregion */

  return (
    <nav className="w-[80%] sticky mx-auto px-6 py-4 rounded-xl shadow-xl bg-zinc-700/10 backdrop-blur-xs border border-zinc-800 z-50">
      <div className="flex flex-col gap-2 relative">
        <div className="flex items-center justify-between">
          <img src={logoImg} alt="EasyAnime" title="EasyAnime" className="w-20" />
          <div className="w-full max-w-sm relative">
            <input
              type="text"
              placeholder="Search for an anime..."
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl shadow-xl bg-zinc-600/10 border border-zinc-800 text-zinc-100 transition-all duration-300 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-400" size={20} />
          </div>
        </div>
        {searchTerm.trim().length >= 3 && searchAnimeList.length > 0 && (
          <div
            ref={resultsRef}
            className="w-full max-w-sm max-h-96 absolute top-18 right-0 overflow-y-auto rounded-xl shadow-xl bg-zinc-900/80 backdrop-blur-xs border border-zinc-800 z-50"
          >
            {searchAnimeList.map((anime: Anime) => (
              <AnimeCard key={anime.id} anime={anime} orientation="horizontal" />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
