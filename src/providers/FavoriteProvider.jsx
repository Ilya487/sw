import React, { createContext, useState } from "react";

export const FavoriteContext = createContext(null);

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const checkFavorite = (url) => {
    const index = favorites.findIndex((item) => item.url == url);

    if (index == -1) return false;
    else return true;
  };

  const toggleFavorite = (item) => {
    const isInFavorite = checkFavorite(item.url);

    if (isInFavorite) {
      setFavorites(favorites.filter((fav) => fav.url != item.url));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const value = { favorites, toggleFavorite, checkFavorite };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
