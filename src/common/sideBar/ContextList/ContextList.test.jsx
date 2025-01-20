import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import ContextList from "./ContextList";

describe("ContextList Component", () => {
  const mockData = [
    { idContext: 1, title: "Title 1", idUser: 1 },
    { idContext: 2, title: "Title 2", idUser: 1 },
    { idContext: 3, title: "Title 3", idUser: 1 },
  ];

  it("Render whe there are data's in list", () => {
    render(
      <MemoryRouter>
        <ContextList requestData={mockData} />
      </MemoryRouter>,
    );

    const contextList = screen.getByTestId("context-list");
    expect(contextList).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(mockData.length);

    mockData.forEach((context) => {
      const listItemText = screen.getByText(context.title);
      expect(listItemText).toBeInTheDocument();
    });
  });

  it("Render when there are not data's in list", () => {
    render(
      <MemoryRouter>
        <ContextList requestData={[]} />
      </MemoryRouter>,
    );

    const contextList = screen.getByTestId("context-list");
    expect(contextList).toBeInTheDocument();

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0);
  });
});
