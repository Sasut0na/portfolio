import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <Home />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
