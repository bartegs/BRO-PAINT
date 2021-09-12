import { render } from "@testing-library/react";
import * as React from "react";

import { Card } from "./Card";

describe("Card", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(
      <Card
        title="Prace przygotowawcze"
        desc="Aktualnie zajmujemy się przygotowaniem Twojego auta, na tym etapie czekamy na części, naprawiamy to, czego nie trzeba wymieniać oraz maskujemy auto do malowania."
        isFirst={false}
        isLast={false}
        additionalClasses=""
      />
    );

    const card = container.querySelector("div.axis__card");
    expect(card).toBeInTheDocument();
  });

  it(`should render heading inside the card`, () => {
    const { container } = render(
      <Card
        title="Prace przygotowawcze"
        desc="Aktualnie zajmujemy się przygotowaniem Twojego auta, na tym etapie czekamy na części, naprawiamy to, czego nie trzeba wymieniać oraz maskujemy auto do malowania."
        isFirst={false}
        isLast={false}
        additionalClasses=""
      />
    );

    const heading = container.querySelector("h4.card__heading");
    expect(heading).toBeInTheDocument();
  });

  it(`should render a paragraph with stage description inside the card which is neither first nor last`, () => {
    const { container } = render(
      <Card
        title="Prace przygotowawcze"
        desc="Aktualnie zajmujemy się przygotowaniem Twojego auta, na tym etapie czekamy na części, naprawiamy to, czego nie trzeba wymieniać oraz maskujemy auto do malowania."
        isFirst={false}
        isLast={false}
        additionalClasses=""
      />
    );

    const paragraph = container.querySelector("p.card__text");
    expect(paragraph).toBeInTheDocument();
  });

  it(`shouldn't render a paragraph with stage description inside the card which is first`, () => {
    const { container } = render(
      <Card
        title="Zlecenie przyjęte Zaczynamy!"
        desc=""
        isFirst
        isLast={false}
        additionalClasses=""
      />
    );

    const firstParagraph = container.querySelector("p.card__text");
    expect(firstParagraph).not.toBeInTheDocument();
  });

  it(`shouldn't render a paragraph with stage description inside the card which is last`, () => {
    const { container } = render(
      <Card
        title="Zlecenie ukończone. Możesz odebrać auto!"
        desc=""
        isFirst={false}
        isLast
        additionalClasses=""
      />
    );

    const lastParagraph = container.querySelector("p.card__text");
    expect(lastParagraph).not.toBeInTheDocument();
  });

  it(`should render a button to expand the card which is neither first nor last`, () => {
    const { container } = render(
      <Card
        title="Prace przygotowawcze"
        desc="Aktualnie zajmujemy się przygotowaniem Twojego auta, na tym etapie czekamy na części, naprawiamy to, czego nie trzeba wymieniać oraz maskujemy auto do malowania."
        isFirst={false}
        isLast={false}
        additionalClasses=""
      />
    );

    const toggler = container.querySelector("button.toggler");
    expect(toggler).toBeInTheDocument();
  });

  it(`shouldn't render a button to expand the card which is first`, () => {
    const { container } = render(
      <Card
        title="Zlecenie przyjęte Zaczynamy!"
        desc=""
        isFirst
        isLast={false}
        additionalClasses=""
      />
    );

    const firstToggler = container.querySelector("button.toggler");
    expect(firstToggler).not.toBeInTheDocument();
  });

  it(`shouldn't render a button to expand the card which is last`, () => {
    const { container } = render(
      <Card
        title="Zlecenie ukończone. Możesz odebrać auto!"
        desc=""
        isFirst={false}
        isLast
        additionalClasses=""
      />
    );

    const lastToggler = container.querySelector("button.toggler");
    expect(lastToggler).not.toBeInTheDocument();
  });

  it(`should render a flag icon in the first card`, () => {
    const { container } = render(
      <Card
        title="Zlecenie przyjęte Zaczynamy!"
        desc=""
        isFirst
        isLast={false}
        additionalClasses=""
      />
    );

    const flag = container.querySelector("span.icon--flag");
    expect(flag).toBeInTheDocument();
  });

  it(`should render two flag icons in the last card`, () => {
    const { container } = render(
      <Card
        title="Zlecenie ukończone. Możesz odebrać auto!"
        desc=""
        isFirst={false}
        isLast
        additionalClasses=""
      />
    );

    const flags = container.querySelectorAll("span.icon--flag").length;
    expect(flags === 2).toBeTruthy();
  });

  it(`shouldn't render a flag icon in the card which is neither first nor last`, () => {
    const { container } = render(
      <Card
        title="Zlecenie przyjęte Zaczynamy!"
        desc=""
        isFirst={false}
        isLast={false}
        additionalClasses=""
      />
    );

    const noFlag = container.querySelector("span.icon--flag");
    expect(noFlag).not.toBeInTheDocument();
  });
});
