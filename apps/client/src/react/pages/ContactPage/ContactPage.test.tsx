import { screen, render } from "@testing-library/react";
import * as React from "react";
import { ContactPage } from "./ContactPage";

describe("ContactPage", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(<ContactPage />);

    const contactPage = container.querySelector("div.contact-page");
    expect(contactPage).toBeInTheDocument();
  });

  it(`should render a section for the cards on the page`, () => {
    const { container } = render(<ContactPage />);

    const cardsContainer = container.querySelector(
      "section.contact-page__cards-container"
    );
    expect(cardsContainer).toBeInTheDocument();
  });

  it(`should render a card containing hq location`, () => {
    render(<ContactPage />);

    const hq = screen.getByText("BRO PAINT siedziba w Gdańsku");
    expect(hq).toBeInTheDocument();
  });

  it(`should render a card containing phone number`, () => {
    render(<ContactPage />);

    const phoneLabel = screen.getByText("Obsługa klienta");
    expect(phoneLabel).toBeInTheDocument();

    const phone = screen.getByText("+48 222 444 888");
    expect(phone).toBeInTheDocument();
  });

  it(`should render a card containing textarea field for message`, () => {
    render(<ContactPage />);

    const message = screen.getByLabelText("Jak możemy Ci pomóc?*");
    expect(message).toBeInTheDocument();
  });

  it(`should render a map`, () => {
    const { container } = render(<ContactPage />);

    const map = container.querySelector("section.contact-page__map");
    expect(map).toBeInTheDocument();
  });
});
