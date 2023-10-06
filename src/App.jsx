import React from "react";
import { RouterProvider } from "react-router-dom";
import FavoriteProvider from "./providers/FavoriteProvider";
import ThemeProvider from "./providers/ThemeProvider";
import { router } from "./router/router";

function App() {
  return (
    <ThemeProvider>
      <FavoriteProvider>
        <RouterProvider router={router} />
      </FavoriteProvider>
    </ThemeProvider>
  );
}

export default App;
