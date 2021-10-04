import { screen, render } from "@testing-library/react";
import * as React from "react";
import { AboutUsPage } from "./AboutUsPage";

describe("AboutUsPage", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(<AboutUsPage />);

    const aboutUsPage = container.querySelector("div.about-us-page");
    expect(aboutUsPage).toBeInTheDocument();
  });

  it(`should render heading`, () => {
    render(<AboutUsPage />);

    const heading = screen.getByText(
      "Mamy doświadczenie, pasję, umiejęności oraz indywidualne podejście do każdego klienta."
    );
    expect(heading).toBeInTheDocument();
  });

  it(`should render a section for cards with image`, () => {
    const { container } = render(<AboutUsPage />);

    const cardsWithImageContainer = container.querySelector(
      "section.about-us-page__cards-with-image"
    );
    expect(cardsWithImageContainer).toBeInTheDocument();
  });

  it(`should render a section for cards with text`, () => {
    const { container } = render(<AboutUsPage />);

    const cardsWithTextContainer = container.querySelector(
      "section.about-us-page__cards-with-text"
    );
    expect(cardsWithTextContainer).toBeInTheDocument();
  });

  it(`should render 3 cards with image`, () => {
    const { container } = render(<AboutUsPage />);

    const cardsWithImage = container.querySelectorAll(
      "div.card-with-image"
    ).length;
    expect(cardsWithImage === 3).toBeTruthy();
  });

  it(`should render 3 cards with text`, () => {
    const { container } = render(<AboutUsPage />);

    const cardsWithText =
      container.querySelectorAll("div.card-with-text").length;
    expect(cardsWithText === 3).toBeTruthy();
  });

  it(`should render card with "BLACHARKA" heading`, () => {
    render(<AboutUsPage />);

    const tinsmith = screen.getByText("BLACHARKA");
    expect(tinsmith).toBeInTheDocument();
  });

  it(`should render card with "LAKIEROWANIE" heading`, () => {
    render(<AboutUsPage />);

    const painting = screen.getByText("LAKIEROWANIE");
    expect(painting).toBeInTheDocument();
  });

  it(`should render card with "DETAILING" heading`, () => {
    render(<AboutUsPage />);

    const detailing = screen.getByText("DETAILING");
    expect(detailing).toBeInTheDocument();
  });

  it(`should render card with "Kim jesteśmy?" heading`, () => {
    render(<AboutUsPage />);

    const whoAreWe = screen.getByText("Kim jesteśmy?");
    expect(whoAreWe).toBeInTheDocument();
  });

  it(`should render card with "Dlaczego my?" heading`, () => {
    render(<AboutUsPage />);

    const whyUs = screen.getByText("Dlaczego my?");
    expect(whyUs).toBeInTheDocument();
  });

  it(`should render card with "Co nas wyróżnia?" heading`, () => {
    render(<AboutUsPage />);

    const whatMakesUsDifferent = screen.getByText("Co nas wyróżnia?");
    expect(whatMakesUsDifferent).toBeInTheDocument();
  });
});
