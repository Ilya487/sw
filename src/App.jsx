import React from "react";
import PeoplePage from "./pages/PeoplePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PersonPage from "./pages/PersonPage";
import Layout from "./components/Layout/Layout";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="people" element={<PeoplePage />} />
          <Route path="people/:id" element={<PersonPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="/" element={<Navigate to="people" />} />
          <Route path="*" element={<p>нет такой страницы</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
