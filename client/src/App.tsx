import { CssBaseline, ThemeProvider } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/mainStyle.scss";

import AppRoutes from "./routes";
import { baseTheme } from "./theme";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />

        <AppRoutes />
      </ThemeProvider>
    </>
  );
};