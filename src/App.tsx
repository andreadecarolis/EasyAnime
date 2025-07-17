import { Navbar } from "./components/common";
import { HomePage } from "./components/pages";

function App() {
  return (
    <div className="relative min-h-screen bg-zinc-800">
      <div className="pattern" />
      <Navbar />
      <div className="w-[95%] mx-auto mt-12">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
