import { screen, render } from "@testing-library/react";
import * as React from "react";
import { CardWithText } from "./CardWithText";

const data = {
  color: "green",
  title: "Kim jesteśmy?",
  content:
    "Jesteśmy prężnie rozwijającą się firmą świadczącą usługi blacharsko-lakiernicze oraz detailingowe z siedzibą w Gdańsku. Oferujemy szereg usług, począwszy od napraw blacharskich, przez kompleksowe usługi lakiernicze na detailingu kończąc.",
};

describe("CardWithText", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(
      <CardWithText
        color={data.color}
        title={data.title}
        content={data.content}
      />
    );

    const cardWithText = container.querySelector("div.card-with-text");
    expect(cardWithText).toBeInTheDocument();
  });

  it(`should render heading`, () => {
    render(
      <CardWithText
        color={data.color}
        title={data.title}
        content={data.content}
      />
    );

    const heading = screen.getByText("Kim jesteśmy?");
    expect(heading).toBeInTheDocument();
  });

  it(`should render description text`, () => {
    render(
      <CardWithText
        color={data.color}
        title={data.title}
        content={data.content}
      />
    );

    const description = screen.getByText(
      "Jesteśmy prężnie rozwijającą się firmą świadczącą usługi blacharsko-lakiernicze oraz detailingowe z siedzibą w Gdańsku. Oferujemy szereg usług, począwszy od napraw blacharskich, przez kompleksowe usługi lakiernicze na detailingu kończąc."
    );
    expect(description).toBeInTheDocument();
  });
});
