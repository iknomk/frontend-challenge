const KEY = "favorite_cats";

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const toggleFavorite = (cat) => {
  const favorites = getFavorites();
  const exists = favorites.find((item) => item.id === cat.id);

  let updated;

  if (exists) {
    updated = favorites.filter((item) => item.id !== cat.id);
  } else {
    updated = [...favorites, cat];
  }

  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
};

export const isFavorite = (id) => {
  return getFavorites().some((cat) => cat.id === id);
};