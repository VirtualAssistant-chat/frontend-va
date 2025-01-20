import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import Microphone from "./Microphone";
import store from "../../../redux/store";
import AlertsProvider from "../../../hooks/alerts/AlertsProvider";

describe("Microphone component", () => {
  it("renders without errors", () => {
    render(
      <Provider store={store}>
        <AlertsProvider>
          <Microphone
            idContext={0}
            idUser={0}
            isRecording={false}
            setIsRecording={() => {}}
          />
        </AlertsProvider>
      </Provider>,
    );
  });

  it("displays the microphone icon when not recording", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <AlertsProvider>
          <Microphone
            idContext={0}
            idUser={0}
            isRecording={false}
            setIsRecording={() => {}}
          />
        </AlertsProvider>
      </Provider>,
    );
    const microphoneIcon = getByTestId("microphone-icon");
    expect(microphoneIcon).toBeInTheDocument();
  });

  it("displays the stop icon when recording", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <AlertsProvider>
          <Microphone
            idContext={0}
            idUser={0}
            isRecording
            setIsRecording={() => {}}
          />
        </AlertsProvider>
      </Provider>,
    );
    const stopIcon = getByTestId("stop-icon");
    expect(stopIcon).toBeInTheDocument();
  });
});
