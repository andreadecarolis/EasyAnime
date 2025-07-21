import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar, Pattern } from "./components/common";
import { AccountPage, AnimePage, HomePage } from "./components/pages";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative py-6 bg-zinc-950">
        <Pattern />
        <Navbar />
        <div className="w-[95%] mx-auto mt-12 z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/anime/:id" element={<AnimePage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
