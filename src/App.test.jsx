import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import App from "./App";
import store from "./redux/store";
import defaultTheme from "./theme/DefaultTheme";

jest.mock("@lottiefiles/react-lottie-player", () => {
  function PlayerMock() {
    return null;
  }
  PlayerMock.play = jest.fn();
  return {
    Player: PlayerMock,
  };
});

describe("App", () => {
  afterEach(cleanup);

  test("renders learn react link", async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <div data-testid="app">
            <App />
          </div>
        </ThemeProvider>
      </Provider>,
    );

    const app = await screen.findByTestId("app");
    expect(app).toBeInTheDocument();
  });
});
