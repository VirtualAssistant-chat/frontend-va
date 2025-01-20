import React from "react";
import { render } from "@testing-library/react";
import TextCard from "./TextCard";

const MESSAGE_TEST = "This is a test message";

describe("<TextCard />", () => {
  test("Renders the TextCard component with the correct message for user", () => {
    const { getByText } = render(<TextCard message={MESSAGE_TEST} isUser />);
    const messageElement = getByText(MESSAGE_TEST);
    expect(messageElement).toBeInTheDocument();
  });
});
