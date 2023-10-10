import { createBrowserRouter, Navigate } from "react-router-dom";
import PeoplePage from "../pages/people/PeoplePage";
import PersonPage from "../pages/people/PersonPage/PersonPage";
import Layout from "../components/Layout/Layout";
import SearchPage from "../pages/search/SearchPage";
import FilmsPage from "../pages/films/FilmsPage";
import FilmPage from "../pages/films/FilmPage/FilmPage";
import PlanetsPage from "../pages/PlanetsPage";
import SpeciesPage from "../pages/SpeciesPage";
import StarshipsPage from "../pages/StarshipsPage";
import VehiclesPage from "../pages/VehiclesPage";
import FavoritePage from "../pages/favorite/FavoritePage";
import EntityDetailPage from "../components/EntityDetailePage/EntityDetailedPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      path: "/",
      children: [
        {
          element: <PeoplePage />,
          path: "people",
        },
        {
          path: "people/:id",
          element: <PersonPage />,
        },
        {
          element: <SearchPage />,
          path: "search",
        },
        {
          element: <FilmsPage />,
          path: "films",
        },
        {
          element: <FilmPage />,
          path: "films/:id",
        },
        {
          element: <PlanetsPage />,
          path: "planets",
        },
        {
          path: "planets/:id",
          element: <EntityDetailPage entity="planets" />,
        },
        {
          element: <SpeciesPage />,
          path: "species",
        },
        {
          element: <EntityDetailPage entity="species" />,
          path: "species/:id",
        },
        {
          element: <StarshipsPage />,
          path: "starships",
        },
        {
          element: <EntityDetailPage entity="starships" />,
          path: "starships/:id",
        },
        {
          element: <VehiclesPage />,
          path: "vehicles",
        },
        {
          element: <EntityDetailPage entity="vehicles" />,
          path: "vehicles/:id",
        },
        {
          element: <FavoritePage />,
          path: "favorite",
        },
        {
          element: <Navigate to="people?page=1" />,
          path: "/",
        },
        {
          element: <NotFoundPage />,
          path: "*",
        },
      ],
    },
  ],
  { basename: "/sw" }
);
