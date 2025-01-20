import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import ChatField from "./ChatField";
import defaultTheme from "../../../../theme/DefaultTheme";
import AlertsProvider from "../../../../hooks/alerts/AlertsProvider";
import store from "../../../../redux/store";

jest.mock("@lottiefiles/react-lottie-player", () => {
  function PlayerMock() {
    return null;
  }
  PlayerMock.play = jest.fn();
  return {
    Player: PlayerMock,
  };
});

const ID = {
  CONTEXT: 1,
};

describe("show the chatField component with out errors", () => {
  it("renders without errors", () => {
    render(
      <Provider store={store}>
        <AlertsProvider>
          <ThemeProvider theme={defaultTheme}>
            <ChatField contextId={ID.CONTEXT} updateHeight={() => {}} />
          </ThemeProvider>
        </AlertsProvider>
      </Provider>,
    );
  });
  it("show the microphone icon when input is empty", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <AlertsProvider>
          <ThemeProvider theme={defaultTheme}>
            <ChatField contextId={ID.CONTEXT} updateHeight={() => {}} />
          </ThemeProvider>
        </AlertsProvider>
      </Provider>,
    );
    const microphoneIcon = getByTestId("microphone-icon");

    expect(microphoneIcon).toBeInTheDocument();
  });
  it("shows the send icon when input is not empty", () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <Provider store={store}>
        <AlertsProvider>
          <ThemeProvider theme={defaultTheme}>
            <ChatField contextId={ID.CONTEXT} updateHeight={() => {}} />
          </ThemeProvider>
        </AlertsProvider>
      </Provider>,
    );
    const inputElement = getByPlaceholderText("Send a message");

    fireEvent.change(inputElement, { target: { value: "Hello word" } });
    const sendButton = getByLabelText("send");

    expect(sendButton).toBeInTheDocument();
  });
});
