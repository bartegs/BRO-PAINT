import { screen, render } from "@testing-library/react";
import * as React from "react";
import { CardWithImage } from ".";
import { detailing } from "../assets";

const data = {
  image: detailing,
  color: "pink",
  title: "DETAILING",
  content:
    "Chcesz przywrócić dawną świetność swojemu autu? Zapraszamy na kompleksowy detailing! Nasi specjaliści sprawią, że będziesz przeciereać oczy ze zdumienia jak to możliwe, że Twoje auto tak pięknie wygląda!",
};

describe("CardWithImage", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(
      <CardWithImage
        image={data.image}
        color={data.color}
        title={data.title}
        content={data.content}
      />
    );

    const cardWithImage = container.querySelector("div.card-with-image");
    expect(cardWithImage).toBeInTheDocument();
  });

  it(`should render image`, () => {
    const { container } = render(
      <CardWithImage
        image={data.image}
        color={data.color}
        title={data.title}
        content={data.content}
      />
    );

    const image = container.querySelector("img");
    expect(image).toBeInTheDocument();
  });

  it(`should render heading`, () => {
    render(
      <CardWithImage
        image={data.image}
        color={data.color}
        title={data.title}
        content={data.content}
      />
    );

    const heading = screen.getByText("DETAILING");
    expect(heading).toBeInTheDocument();
  });

  it(`should render description text`, () => {
    render(
      <CardWithImage
        image={data.image}
        color={data.color}
        title={data.title}
        content={data.content}
      />
    );

    const description = screen.getByText(
      "Chcesz przywrócić dawną świetność swojemu autu? Zapraszamy na kompleksowy detailing! Nasi specjaliści sprawią, że będziesz przeciereać oczy ze zdumienia jak to możliwe, że Twoje auto tak pięknie wygląda!"
    );
    expect(description).toBeInTheDocument();
  });
});
