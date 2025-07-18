import { Navbar } from "./components/common";
import { HomePage } from "./components/pages";

// TODO: apertura singolo anime (modale o pagina?)
// TODO: watchlist (per ora semplice con un solo stato e in local storage)

function App() {
  return (
    <div className="min-h-screen relative py-6 bg-zinc-950">
      <div className="pattern" />
      <Navbar />
      <div className="w-[95%] mx-auto mt-12">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
