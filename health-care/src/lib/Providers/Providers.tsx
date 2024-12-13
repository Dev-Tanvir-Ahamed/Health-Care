"use client";
import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "../theme/theme";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};
export default Providers;
