import { useSelector } from "react-redux";
import { RootState } from "./store/rootReducer";
import { Navbar } from "./components/common";
import { AnimePage, HomePage } from "./components/pages";
import patternImg from "@/assets/images/pattern.png";

function App() {
  const { selectedAnime } = useSelector((state: RootState) => state.app);

  return (
    <div className="min-h-screen relative py-6 bg-zinc-950">
      <div
        className="w-full h-full absolute top-0 left-0 bg-repeat bg-[length:85px] opacity-[0.1] pointer-events-none z-0"
        style={{
          backgroundImage: `url(${patternImg})`,
        }}
      />
      <Navbar />
      <div className="w-[95%] mx-auto mt-12 z-10">
        {selectedAnime ? <AnimePage anime={selectedAnime} /> : <HomePage />}
      </div>
    </div>
  );
}

export default App;
