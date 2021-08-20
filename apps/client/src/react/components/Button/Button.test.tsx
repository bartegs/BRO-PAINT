import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";

import { Color } from "../../../../../utils/types";

import { Button, ButtonProps } from ".";

describe("Button", () => {
  const defaultProps: ButtonProps = {
    color: "green",
    text: "sample label",
  };

  it("should render correctly class", () => {
    // given
    const color: Color = "green";

    // when
    const { container } = render(<Button {...defaultProps} color={color} />);

    // then
    expect(
      (container.firstChild as Element).classList.contains("button--green")
    ).toBeTruthy();
  });

  it("should render correctly label", () => {
    // given
    const label = "Super Label";

    // when
    render(<Button {...defaultProps} text={label} />);

    // then
    const button = screen.getByText(label);

    expect(button).toBeTruthy();
  });

  it("should correctly use callback", () => {
    // given
    const callback = jest.fn();
    const { container } = render(
      <Button {...defaultProps} onClick={callback} />
    );

    // when
    fireEvent.click(container.firstChild);

    // then
    expect(callback).toHaveBeenCalled();
  });
});
