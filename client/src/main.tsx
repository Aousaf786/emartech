import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/landingPage.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AuthProvider } from "./contextProviders/authentication.tsx";
import { baseTheme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <AuthProvider>
        <LandingPage />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
