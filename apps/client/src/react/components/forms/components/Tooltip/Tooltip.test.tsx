import { render, screen } from "@testing-library/react";
import * as React from "react";
import { Tooltip } from ".";

describe("Tooltip", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(<Tooltip text="test tooltip text" />);

    const tooltip = container.querySelector(`div.tooltip`);
    expect(tooltip).toBeInTheDocument();
  });

  it(`should accept the color in props and apply it`, () => {
    const { container } = render(
      <Tooltip color="pink" text="test tooltip text" />
    );

    const tooltipColor = container.querySelector(`div.tooltip--pink`);
    expect(tooltipColor).toBeInTheDocument();
  });

  it(`should have the question mark symbol`, () => {
    render(<Tooltip text="test tooltip text" />);

    const questionMark = screen.getByText("?");
    expect(questionMark).toBeInTheDocument();
  });

  it(`should render a div for the tooltip text`, () => {
    const { container } = render(<Tooltip text="test tooltip text" />);

    const tooltipTextElement = container.querySelector(`div.tooltip__text`);
    expect(tooltipTextElement).toBeInTheDocument();
  });

  it(`should render the tooltip text given in the props`, () => {
    render(<Tooltip text="test tooltip text" />);

    const tooltipText = screen.getByText(`test tooltip text`);
    expect(tooltipText).toBeInTheDocument();
  });
});
