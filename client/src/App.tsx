import { CssBaseline, ThemeProvider } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/mainStyle.scss";

import { baseTheme } from "./theme";
import AppRoutes from "./routes";

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
