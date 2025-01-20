import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Chat from "./Chat";
import { TEST_ID_CONTAINER } from "../../../constants/chat/ChatConstants";
import { TEST_ID } from "../../../constants/chat/MessageSkeletonConstants";
import store from "../../../redux/store";

const PARAMETERS = {
  USER_ID: 1,
  CONTEXT_ID: 2,
  PAGE_NUMBER: 0,
};

jest.mock("../../../hooks/alerts/UseAlert");

describe("<Chat/>", () => {
  test("Renders without errors", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Chat userId={PARAMETERS.USER_ID} contextId={PARAMETERS.CONTEXT_ID} />
      </Provider>,
    );
    expect(getByTestId(TEST_ID_CONTAINER.CHAT)).toBeInTheDocument();
    expect(getByTestId(TEST_ID_CONTAINER.SCROLL)).toBeInTheDocument();
  });

  test("Renders without errors show skeleton chat", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Chat userId={PARAMETERS.USER_ID} contextId={PARAMETERS.CONTEXT_ID} />
      </Provider>,
    );
    expect(getByTestId(TEST_ID.ASSISTANT_PROFILE)).toBeInTheDocument();
    expect(getByTestId(TEST_ID.USER_PROFILE)).toBeInTheDocument();
  });
});
