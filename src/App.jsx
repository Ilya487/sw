import React from "react";
import PeoplePage from "./pages/PeoplePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PersonPage from "./pages/PersonPage";
import Layout from "./components/Layout/Layout";
import SearchPage from "./pages/SearchPage";
import FilmsPage from "./pages/FilmsPage";
import PlanetsPage from "./pages/PlanetsPage";
import SpeciesPage from "./pages/SpeciesPage";
import StarshipsPage from "./pages/StarshipsPage";
import VehiclesPage from "./pages/VehiclesPage";
import FavoriteProvider from "./providers/FavoriteProvider";

function App() {
  return (
    <BrowserRouter>
      <FavoriteProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="people" element={<PeoplePage />} />
            <Route path="people/:id" element={<PersonPage />} />

            <Route path="search" element={<SearchPage />} />

            <Route path="films" element={<FilmsPage />} />

            <Route path="planets" element={<PlanetsPage />} />

            <Route path="species" element={<SpeciesPage />} />

            <Route path="starships" element={<StarshipsPage />} />

            <Route path="vehicles" element={<VehiclesPage />} />

            <Route path="/" element={<Navigate to="people" />} />
            <Route path="*" element={<p>нет такой страницы</p>} />
          </Route>
        </Routes>
      </FavoriteProvider>
    </BrowserRouter>
  );
}

export default App;
