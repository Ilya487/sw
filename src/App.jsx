import React from "react";
import PeoplePage from "./pages/PeoplePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PersonPage from "./pages/PersonPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="people" element={<PeoplePage />} />
        <Route path="people/:id" element={<PersonPage />} />
        <Route path="/" element={<Navigate to="people" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
