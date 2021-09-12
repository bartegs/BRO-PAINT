import { render, screen } from "@testing-library/react";
import * as React from "react";

import { RepairStatusPage } from ".";

describe("RepairStatusPage", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(<RepairStatusPage />);

    const repairStatusPage = container.querySelector("div.repair-status-page");
    expect(repairStatusPage).toBeInTheDocument();
  });

  it(`should render a form for checking order status`, () => {
    render(<RepairStatusPage />);

    const form = screen.getByText("Sprawdź status zlecenia");
    expect(form).toBeInTheDocument();
  });

  it(`should render axis`, () => {
    const { container } = render(<RepairStatusPage />);

    const axis = container.querySelector(
      "section.repair-status-page__axis-container"
    );
    expect(axis).toBeInTheDocument();
  });

  it(`should render a first stage card with text "Zlecenie przyjęte Zaczynamy!"`, () => {
    render(<RepairStatusPage />);

    const firstStageCard = screen.getByText("Zlecenie przyjęte Zaczynamy!");
    expect(firstStageCard).toBeInTheDocument();
  });

  it(`should render a second stage card with text "Prace przygotowawcze"`, () => {
    render(<RepairStatusPage />);

    const secondStageCard = screen.getByText("Prace przygotowawcze");
    expect(secondStageCard).toBeInTheDocument();
  });

  it(`should render a third stage card with text "Prace lakiernicze"`, () => {
    render(<RepairStatusPage />);

    const thirdStageCard = screen.getByText("Prace lakiernicze");
    expect(thirdStageCard).toBeInTheDocument();
  });

  it(`should render a fourth stage card with text "Detailing i kontrola jakości"`, () => {
    render(<RepairStatusPage />);

    const fourthStageCard = screen.getByText("Detailing i kontrola jakości");
    expect(fourthStageCard).toBeInTheDocument();
  });

  it(`should render a fifth stage card with text "Zlecenie ukończone. Możesz odebrać auto!"`, () => {
    render(<RepairStatusPage />);

    const fifthStageCard = screen.getByText(
      "Zlecenie ukończone. Możesz odebrać auto!"
    );
    expect(fifthStageCard).toBeInTheDocument();
  });
});
