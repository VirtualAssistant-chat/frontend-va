import React from "react";
import { render } from "@testing-library/react";
import Conversation from "./Conversation";

const TEST_MESSAGE = {
  RESPONSE_DEFAULT: "...",
  RESPONSE: "This is a response message",
  REQUEST: "This is a request message",
};

const TEST_ID = {
  CARD: "mock-text-card",
  USER: "user-message",
  NOT_USER: "not-user-message",
};

jest.mock("../message/MessageComponent", () => {
  return function MockTextCard({ message, isUser }) {
    return (
      <div data-testid={TEST_ID.CARD}>
        <span data-testid={isUser ? TEST_ID.USER : TEST_ID.NOT_USER}>
          {message}
        </span>
      </div>
    );
  };
});

describe("<Conversation />", () => {
  test("Renders the conversation component correctly when sending a request and response message.", () => {
    const { getByTestId } = render(
      <Conversation
        messageRequest={TEST_MESSAGE.RESPONSE}
        messageResponse={TEST_MESSAGE.REQUEST}
      />,
    );

    expect(getByTestId(TEST_ID.USER)).toHaveTextContent(TEST_MESSAGE.RESPONSE);
    expect(getByTestId(TEST_ID.NOT_USER)).toHaveTextContent(
      TEST_MESSAGE.REQUEST,
    );
  });

  test("Renders the conversation component correctly when sending a request message.", () => {
    const { getByTestId } = render(
      <Conversation messageRequest={TEST_MESSAGE.RESPONSE} />,
    );

    expect(getByTestId(TEST_ID.USER)).toHaveTextContent(TEST_MESSAGE.RESPONSE);
    expect(getByTestId(TEST_ID.NOT_USER)).toHaveTextContent(
      TEST_MESSAGE.RESPONSE_DEFAULT,
    );
  });
});
