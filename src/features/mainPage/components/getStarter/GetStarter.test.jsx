import React from "react";
import { render, screen } from "@testing-library/react";
import GetStarter from "./GetStarter";

describe("<GetStarter />", () => {
  test("GetStarter component render and have Virtual assistant element", () => {
    render(<GetStarter />);
    const virtualAssistanElement = screen.getByText(/Virtual Assistant/i);

    expect(virtualAssistanElement).toBeInTheDocument();
  });

  test("How can I help with? is prensent on component", () => {
    render(<GetStarter />);
    const helpElement = screen.getByText(/How can I help with?/i);

    expect(helpElement).toBeInTheDocument();
  });

  test("Play my favorite playlist button is present on component", () => {
    render(<GetStarter />);
    const playListElement = screen.getByText(/Play my favorite playlist/i);

    expect(playListElement).toBeInTheDocument();
  });

  test("Remind birthday is present on component", () => {
    render(<GetStarter />);
    const remindElement = screen.getByText(
      /Remind me of my mother's birthday on August 10/i,
    );
    expect(remindElement).toBeInTheDocument();
  });

  test("Send whatsapp is prensent on component", () => {
    render(<GetStarter />);
    const msgElement = screen.getByText(/Send a WhatsApp message to Juan/i);
    expect(msgElement).toBeInTheDocument();
  });

  test("Schedule meeting is present on component", () => {
    render(<GetStarter />);
    const scheduleElement = screen.getByText(
      /Schedule a meeting for next Tuesday at 3 PM/i,
    );
    expect(scheduleElement).toBeInTheDocument();
  });
});
