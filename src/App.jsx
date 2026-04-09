import { useState } from "react";
import AllCats from "./pages/AllCatsPage";
import Favorites from "./pages/FavouritesPage";

export default function App() {
  const [tab, setTab] = useState("all"); 
  return (
    <div>
      <header>
        <button 
          className={tab === "all" ? "active" : ""} 
          onClick={() => setTab("all")}
        >
          Все котики
        </button>

        <button 
          className={tab === "favorites" ? "active" : ""} 
          onClick={() => setTab("favorites")}
        >
          Любимые котики
        </button>
      </header>

      {tab === "all" && <AllCats />}
      {tab === "favorites" && <Favorites />}
    </div>
  );
}