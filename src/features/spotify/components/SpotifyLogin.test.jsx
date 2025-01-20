import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import SpotifyLogin from "./SpotifyLogin";
import useAlert from "../../../hooks/alerts/UseAlert";

jest.mock("../../../hooks/alerts/UseAlert");

describe("SpotifyLogin component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the login button", () => {
    useAlert.mockReturnValue({
      success: jest.fn(),
    });

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <SpotifyLogin />
        </Router>
      </Provider>,
    );

    const loginButton = getByText("Connect Spotify");

    expect(loginButton).toBeInTheDocument();
  });

  it("clicking the login button should redirect to Spotify login page", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <SpotifyLogin />
        </Router>
      </Provider>,
    );

    const loginButton = getByText("Connect Spotify");

    fireEvent.click(loginButton);
  });
});
