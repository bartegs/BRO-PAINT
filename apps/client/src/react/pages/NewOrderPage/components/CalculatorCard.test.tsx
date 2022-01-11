import { screen, render } from "@testing-library/react";
import * as React from "react";
import { CalculatorCard } from "./CalculatorCard";

describe("CalculatorCard", () => {
  const result = 2000;
  const color = "green";

  it(`should render correctly to the page`, () => {
    const { container } = render(
      <CalculatorCard result={result} color={color} />
    );

    const calculatorCard = container.querySelector("div.calculator-card");
    expect(calculatorCard).toBeInTheDocument();
  });

  it(`Should render a text "Szacunkowy koszt wynosi:"`, () => {
    render(<CalculatorCard result={result} color={color} />);

    const priceText = screen.getByText("Szacunkowy koszt wynosi:");
    expect(priceText).toBeInTheDocument();
  });

  it(`Should render a text made of the calculated price and currency suffix`, () => {
    render(<CalculatorCard result={result} color={color} />);

    const price = screen.getByText(`${result},00zł`);
    expect(price).toBeInTheDocument();
  });

  it(`Should render a text with instructions what to do next`, () => {
    render(<CalculatorCard result={result} color={color} />);

    const next = screen.getByText(
      "Jeśli chcesz zlecić nam usługę, naciśnij przycisk poniżej."
    );
    expect(next).toBeInTheDocument();
  });

  it(`Should render a button with a text "Zleć usługę"`, () => {
    render(<CalculatorCard result={result} color={color} />);

    const button = screen.getByText("Zleć usługę");
    expect(button).toBeInTheDocument();
  });

  it(`Should render a disclaimer text`, () => {
    render(<CalculatorCard result={result} color={color} />);

    const disclaimer = screen.getByText(
      `*Wyliczona kwota jest jedynie szacunkiem. Każde zlecenie jest wyceniane indywidualne, ponieważ wpływ na końcowy koszt ma bardzo wiele czynników.`
    );
    expect(disclaimer).toBeInTheDocument();
  });
});
