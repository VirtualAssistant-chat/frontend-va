import React from "react";
import { render } from "@testing-library/react";
import ConversationSkeleton from "./ConversationSkeleton";

const TEST_ID = {
  USER: "user-message",
  NOT_USER: "not-user-message",
};

jest.mock("../message/MessageSkeleton", () => {
  return function MockTextCard({ isUser }) {
    return <div data-testid={isUser ? TEST_ID.USER : TEST_ID.NOT_USER} />;
  };
});
describe("<ConversationSkeleton />", () => {
  test("Renderiza el componente SkeletonComponent ", () => {
    const { getByTestId } = render(<ConversationSkeleton />);
    expect(getByTestId(TEST_ID.USER)).toBeInTheDocument();
    expect(getByTestId(TEST_ID.NOT_USER)).toBeInTheDocument();
  });
});
