import { Navbar } from "./components/common";
import { HomePage } from "./components/pages";

function App() {
  return (
    <div className="min-h-screen relative bg-zinc-950">
      <div className="pattern" />
      <Navbar />
      <div className="w-[95%] mx-auto mt-12">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
