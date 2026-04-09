import { useState, useEffect } from "react";
import CatCard from "../components/CatCard";
import { getFavorites } from "../storage";

export default function Favorites() {
  const [cats, setCats] = useState([]);

  const loadFavorites = () => {
    setCats(getFavorites());
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <div className="grid">
      {cats.length === 0 && <p>нет избранных</p>}

      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} onUpdate={loadFavorites} />
      ))}
    </div>
  );
}