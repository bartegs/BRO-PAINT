import { render, screen } from "@testing-library/react";
import * as React from "react";

import { OrderStatusPage } from "./OrderStatusPage";
import ClientContextProvider from "../../contexts/ClientContext";

describe("OrderStatusPage", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(
      <ClientContextProvider>
        <OrderStatusPage />)
      </ClientContextProvider>
    );

    const orderStatusPage = container.querySelector("div.order-status-page");
    expect(orderStatusPage).toBeInTheDocument();
  });

  it(`should render a form for checking order status`, () => {
    render(
      <ClientContextProvider>
        <OrderStatusPage />)
      </ClientContextProvider>
    );

    const form = screen.getByText("Sprawdź status zlecenia");
    expect(form).toBeInTheDocument();
  });

  it(`should render axis`, () => {
    const { container } = render(
      <ClientContextProvider>
        <OrderStatusPage />)
      </ClientContextProvider>
    );

    const axis = container.querySelector(
      "section.order-status-page__axis-container"
    );
    expect(axis).toBeInTheDocument();
  });

  it(`should render a first stage card with text "Zlecenie przyjęte Zaczynamy!"`, () => {
    render(
      <ClientContextProvider>
        <OrderStatusPage />)
      </ClientContextProvider>
    );

    const firstStageCard = screen.getByText("Zlecenie przyjęte Zaczynamy!");
    expect(firstStageCard).toBeInTheDocument();
  });

  it(`should render a second stage card with text "Prace przygotowawcze"`, () => {
    render(
      <ClientContextProvider>
        <OrderStatusPage />)
      </ClientContextProvider>
    );

    const secondStageCard = screen.getByText("Prace przygotowawcze");
    expect(secondStageCard).toBeInTheDocument();
  });

  it(`should render a third stage card with text "Prace lakiernicze"`, () => {
    render(
      <ClientContextProvider>
        <OrderStatusPage />)
      </ClientContextProvider>
    );

    const thirdStageCard = screen.getByText("Prace lakiernicze");
    expect(thirdStageCard).toBeInTheDocument();
  });

  it(`should render a fourth stage card with text "Detailing i kontrola jakości"`, () => {
    render(
      <ClientContextProvider>
        <OrderStatusPage />)
      </ClientContextProvider>
    );

    const fourthStageCard = screen.getByText("Detailing i kontrola jakości");
    expect(fourthStageCard).toBeInTheDocument();
  });

  it(`should render a fifth stage card with text "Zlecenie ukończone. Możesz odebrać auto!"`, () => {
    render(
      <ClientContextProvider>
        <OrderStatusPage />)
      </ClientContextProvider>
    );

    const fifthStageCard = screen.getByText(
      "Zlecenie ukończone. Możesz odebrać auto!"
    );
    expect(fifthStageCard).toBeInTheDocument();
  });
});
