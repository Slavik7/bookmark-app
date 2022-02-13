import React from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as Provider,
} from "@mui/material";
import * as colors from "./colors";
const ThemeProvider = ({ children }) => {
  const theme = createTheme({
    MuiIcon: {
      root: {
        color: "#000",
      },
    },
    palette: {
      primary: {
        main: colors.primaryMain,
        light: colors.primaryLight,
        dark: colors.primaryDark,
      },
    },
  });
  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
};
export default ThemeProvider;
