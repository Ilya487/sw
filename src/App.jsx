import React from "react";
import PeoplePage from "./pages/PeoplePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PersonPage from "./pages/PersonPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="people" element={<PeoplePage />} />
          <Route path="people/:id" element={<PersonPage />} />
          <Route path="/" element={<Navigate to="people" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
