import React from "react";
import PeoplePage from "./pages/people/PeoplePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PersonPage from "./pages/people/PersonPage/PersonPage";
import Layout from "./components/Layout/Layout";
import SearchPage from "./pages/SearchPage";
import FilmsPage from "./pages/films/FilmsPage";
import FilmPage from "./pages/films/FilmPage/FilmPage";
import PlanetsPage from "./pages/PlanetsPage";
import SpeciesPage from "./pages/SpeciesPage";
import StarshipsPage from "./pages/StarshipsPage";
import VehiclesPage from "./pages/VehiclesPage";
import FavoriteProvider from "./providers/FavoriteProvider";
import FavoritePage from "./pages/FavoritePage";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <FavoriteProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="people" element={<PeoplePage />} />
              <Route path="people/:id" element={<PersonPage />} />

              <Route path="search" element={<SearchPage />} />

              <Route path="films" element={<FilmsPage />} />
              <Route path="films/:id" element={<FilmPage />} />

              <Route path="planets" element={<PlanetsPage />} />

              <Route path="species" element={<SpeciesPage />} />

              <Route path="starships" element={<StarshipsPage />} />

              <Route path="vehicles" element={<VehiclesPage />} />

              <Route path="favorite" element={<FavoritePage />} />

              <Route path="/" element={<Navigate to="people" />} />
              <Route path="*" element={<p>нет такой страницы</p>} />
            </Route>
          </Routes>
        </FavoriteProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
