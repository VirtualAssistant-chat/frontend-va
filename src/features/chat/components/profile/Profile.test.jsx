import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

const ICON_CLASS = {
  USER: ".tabler-icon-user",
  WAVE_SINE: ".tabler-icon-wave-sine",
};

describe("<Profile />", () => {
  test("Renders the Profile component with the correct avatar for a user", () => {
    const { container } = render(<Profile isUser />);
    const userIcon = container.querySelector(ICON_CLASS.USER);
    expect(userIcon).toBeInTheDocument();
  });

  test("Render the Profile component with the correct non-user avatar", () => {
    const { container } = render(<Profile isUser={false} />);
    const waveIcon = container.querySelector(ICON_CLASS.WAVE_SINE);
    expect(waveIcon).toBeInTheDocument();
  });
});
