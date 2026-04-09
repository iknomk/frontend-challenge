import { useState } from "react";
import { toggleFavorite, isFavorite } from "../storage";

export default function CatCard({ cat, onUpdate }) {
  const [fav, setFav] = useState(isFavorite(cat.id));
  const [isHovered, setIsHovered] = useState(false);
  const [isHeartHovered, setIsHeartHovered] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    toggleFavorite(cat);
    setFav(!fav);
    onUpdate && onUpdate();
  };

  let heartFill = "none";
  if (fav) {
    heartFill = "#FF3A00"; 
  } else if (isHeartHovered) {
    heartFill = "#F24E1E";
  }

  return (
    <div 
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={cat.url} alt="cat" />
      
      {isHovered && (
        <button 
          className="heart-btn"
          onClick={handleClick}
          onMouseEnter={() => setIsHeartHovered(true)}
          onMouseLeave={() => setIsHeartHovered(false)}
        >
          <svg
            className="heart-svg"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
              fill={heartFill}
              stroke="#F24E1E"
              strokeWidth="2"
            />
          </svg>
        </button>
      )}
    </div>
  );
}