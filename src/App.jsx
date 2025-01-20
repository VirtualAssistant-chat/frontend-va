import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import router from "./app/router";
import defaultTheme from "./theme/DefaultTheme";
import store from "./redux/store";
import "./App.css";
import AlertsProvider from "./hooks/alerts/AlertsProvider";

function App() {
  return (
    <Provider store={store}>
      <AlertsProvider>
        <ThemeProvider theme={defaultTheme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AlertsProvider>
    </Provider>
  );
}

export default App;
