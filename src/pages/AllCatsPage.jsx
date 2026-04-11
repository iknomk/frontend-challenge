import { useEffect, useState } from "react";
import CatCard from "../components/CatCard";

const API_KEY = "live_4GZTPlcE1UIsY1yYDeN33KZPPDzSTeCHgISejZ4c2nKg4odpQHuHfYU2NaQfHa83";

export default function AllCats() {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const res = await fetch(
      'https://api.thecatapi.com/v1/images/search?limit=10',
      {
        headers: {
          'x-api-key': API_KEY,
        },
      }
    );

    const data = await res.json();
    setCats((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className="grid">
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}

      <button onClick={fetchCats}>... загружаем еще котиков ...</button>
    </div>
  );
}