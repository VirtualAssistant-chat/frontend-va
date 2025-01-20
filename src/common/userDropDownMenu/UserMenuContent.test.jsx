import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import UserMenuContent from "./UserMenuContent";
import defaultTheme from "../../theme/DefaultTheme";
import {
  MANAGE_ACCOUNT,
  LOG_OUT,
} from "../../constants/userMenu/UserManagement";

describe("<UserMenuContent />", () => {
  test("User Menu renders without errors", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <UserMenuContent />
      </ThemeProvider>,
    );
  });

  test("User Menu ManagementAccount button name is displaying correctly", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <UserMenuContent />
      </ThemeProvider>,
    );
    const managementAccountButton = screen.getByText(MANAGE_ACCOUNT);

    expect(managementAccountButton).toBeInTheDocument();
  });

  test("User Menu ManagementAccount button name is displaying correctly", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <UserMenuContent />
      </ThemeProvider>,
    );
    const managementAccountButton = screen.getByText(LOG_OUT);

    expect(managementAccountButton).toBeInTheDocument();
  });
});
