import React, { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext(null);

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(getFromStorage() || []);

  function getFromStorage() {
    const str = localStorage.getItem("favorites");
    return JSON.parse(str);
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

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
