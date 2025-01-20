import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import TopBarSection from "./TopBarSection";
import TOP_BAR_TITLE from "../../constants/topBar/TopBarSectionCons";
import defaultTheme from "../../theme/DefaultTheme";
import store from "../../redux/store";

const BUTTON_QUANTITY = 3;

jest.mock("../../hooks/alerts/UseAlert");

describe("<TopBarSection />", () => {
  const handleDrawerOpen = () => {};
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("TopBarSection renders without errors", () => {
    render(
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={defaultTheme}>
            <TopBarSection handleDrawerOpen={handleDrawerOpen} open />
          </ThemeProvider>
        </Router>
      </Provider>,
    );
  });

  test("Top bar title is displaying correctly", () => {
    render(
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={defaultTheme}>
            <TopBarSection handleDrawerOpen={handleDrawerOpen} open />
          </ThemeProvider>
        </Router>
      </Provider>,
    );
    const topBarTitle = screen.getByText(TOP_BAR_TITLE);

    expect(topBarTitle).toBeInTheDocument();
  });

  test("TopBarSection contains expected buttons", () => {
    render(
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={defaultTheme}>
            <TopBarSection handleDrawerOpen={handleDrawerOpen} open />
          </ThemeProvider>
        </Router>
      </Provider>,
    );
  
    const buttons = screen.getAllByRole("button");
  
    expect(buttons).toHaveLength(BUTTON_QUANTITY);
  });  
});
