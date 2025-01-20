import React from "react";
import { render } from "@testing-library/react";
import MessageComponent from "./MessageComponent";

const MESSAGE = {
  DEFAULT: "This is a test message",
  USER: "User message",
  NOT_USER: "Not user message",
};
const TEST_ID = {
  MOCK_PROFILE: "mock-profile",
  MOCK_TEXT_CARD: "mock-text-card",
  USER: "user-message",
  NOT_USER: "not-user-message",
};

jest.mock("../profile/Profile", () => {
  return function MockProfile({ isUser }) {
    return (
      <div data-testid={TEST_ID.MOCK_PROFILE}>
        {isUser ? MESSAGE.USER : MESSAGE.NOT_USER}
      </div>
    );
  };
});

jest.mock("../textCard/TextCard", () => {
  return function MockTextCard({ message, isUser }) {
    return (
      <div data-testid={TEST_ID.MOCK_TEXT_CARD}>
        <span data-testid={isUser ? TEST_ID.USER : TEST_ID.NOT_USER}>
          {message}
        </span>
      </div>
    );
  };
});

describe("<MessageComponent />", () => {
  test("Renders the MessageComponent component correctly when isUser is true", () => {
    const { getByTestId } = render(
      <MessageComponent isUser message={MESSAGE.DEFAULT} />,
    );

    expect(getByTestId(TEST_ID.MOCK_PROFILE)).toHaveTextContent(MESSAGE.USER);

    expect(getByTestId(TEST_ID.MOCK_TEXT_CARD)).toBeInTheDocument();
    expect(getByTestId(TEST_ID.USER)).toHaveTextContent(MESSAGE.DEFAULT);
  });

  test("Renders the MessageComponent component correctly when isUser is false", () => {
    const { getByTestId } = render(
      <MessageComponent isUser={false} message={MESSAGE.DEFAULT} />,
    );

    expect(getByTestId(TEST_ID.MOCK_PROFILE)).toHaveTextContent(
      MESSAGE.NOT_USER,
    );

    expect(getByTestId(TEST_ID.MOCK_TEXT_CARD)).toBeInTheDocument();
    expect(getByTestId(TEST_ID.NOT_USER)).toHaveTextContent(MESSAGE.DEFAULT);
  });
});
