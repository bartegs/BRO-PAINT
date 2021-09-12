import { render, screen } from "@testing-library/react";
import * as React from "react";

import { Carousel } from ".";

describe("Carousel", () => {
  let finishedPhotos = true;
  const setFinishedPhotos = () => true;

  it(`should render correctly to the page`, () => {
    const { container } = render(
      <Carousel
        finishedPhotos={finishedPhotos}
        setFinishedPhotos={setFinishedPhotos}
      />
    );

    const carousel = container.querySelector("div.gallery-page__carousel");
    expect(carousel).toBeInTheDocument();
  });

  it(`should render two sets of arrow buttons`, () => {
    const { container } = render(
      <Carousel
        finishedPhotos={finishedPhotos}
        setFinishedPhotos={setFinishedPhotos}
      />
    );

    const buttons = container.querySelectorAll(
      "button.gallery-page__arrows-container"
    ).length;
    expect(buttons === 2).toBeTruthy();
  });

  it(`should render a left variant of arrow button`, () => {
    const { container } = render(
      <Carousel
        finishedPhotos={finishedPhotos}
        setFinishedPhotos={setFinishedPhotos}
      />
    );

    const leftButton = container.querySelector(
      "button.gallery-page__arrows-container--left"
    );
    expect(leftButton).toBeInTheDocument();
  });

  it(`should render an left arrow button which is made of three arrow icons`, () => {
    const { container } = render(
      <Carousel
        finishedPhotos={finishedPhotos}
        setFinishedPhotos={setFinishedPhotos}
      />
    );

    const button = container.querySelector(
      "button.gallery-page__arrows-container--left"
    );
    const arrows = button.querySelectorAll("span.arrow-icon").length;
    expect(arrows === 3).toBeTruthy();
  });

  it(`should render bar toggler`, () => {
    const { container } = render(
      <Carousel
        finishedPhotos={finishedPhotos}
        setFinishedPhotos={setFinishedPhotos}
      />
    );

    const toggler = container.querySelector("button.gallery-page__toggler");
    expect(toggler).toBeInTheDocument();
  });

  it(`should render two bar togglers`, () => {
    const { container } = render(
      <Carousel
        finishedPhotos={finishedPhotos}
        setFinishedPhotos={setFinishedPhotos}
      />
    );

    const togglers = container.querySelectorAll(
      "button.gallery-page__toggler"
    ).length;
    expect(togglers === 2).toBeTruthy();
  });

  it(`should render a paragraph with photo category`, () => {
    const { container } = render(
      <Carousel
        finishedPhotos={finishedPhotos}
        setFinishedPhotos={setFinishedPhotos}
      />
    );

    const paragraph = container.querySelector("p");
    expect(paragraph).toBeInTheDocument();
  });

  it(`Should have a paragraph text of "Ukończone zlecenia" if finishedPhotos equals true`, () => {
    render(
      <Carousel
        finishedPhotos={finishedPhotos}
        setFinishedPhotos={setFinishedPhotos}
      />
    );

    const finishedParagraph = screen.getByText("Ukończone zlecenia");
    expect(finishedParagraph).toBeInTheDocument();
  });

  it(`Should have a paragraph text of "Przebieg naszej pracy" if finishedPhotos equals false`, () => {
    finishedPhotos = false;

    render(
      <Carousel
        finishedPhotos={finishedPhotos}
        setFinishedPhotos={setFinishedPhotos}
      />
    );

    const unfinishedParagraph = screen.getByText("Przebieg naszej pracy");
    expect(unfinishedParagraph).toBeInTheDocument();
  });
});
