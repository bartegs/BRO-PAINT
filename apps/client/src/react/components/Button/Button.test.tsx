import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import { Button } from ".";

describe("Button", () => {
  it(`should render button element`, () => {
    const { container } = render(<Button text="click" color="green" />);

    const button = container.querySelector("button");
    expect(button).toBeInTheDocument();
  });

  it(`should have a "button" class`, () => {
    const { container } = render(<Button text="click" color="green" />);

    const buttonClass = container.querySelector("button.button");
    expect(buttonClass).toBeInTheDocument();
  });

  it(`should correctly apply the variant given in the prop`, () => {
    const { container } = render(
      <Button text="click" color="green" variant="primary" />
    );

    const buttonVariant = container.querySelector("button.button--primary");
    expect(buttonVariant).toBeInTheDocument();
  });

  it(`should correctly apply the color given in the prop`, () => {
    const { container } = render(
      <Button text="click" color="green" variant="primary" />
    );

    const buttonColor = container.querySelector("button.button--green-primary");
    expect(buttonColor).toBeInTheDocument();
  });

  it(`should should accept additional css classes via props and properly apply it`, () => {
    const { container } = render(
      <Button additionalClasses="mt-2" text="click" color="green" />
    );

    const additionalClass = container.querySelector(`button.mt-2`);
    expect(additionalClass).toBeInTheDocument();
  });

  it(`should should have a default type of button`, () => {
    const { container } = render(<Button text="click" color="green" />);

    const type = container.querySelector(`button[type="button"]`);
    expect(type).toBeInTheDocument();
  });

  it(`should should accept button type via props and properly apply it`, () => {
    const { container } = render(
      <Button text="click" color="green" type="submit" />
    );

    const typeSubmit = container.querySelector(`button[type="submit"]`);
    expect(typeSubmit).toBeInTheDocument();
  });

  it(`should render the button text given in the text prop`, () => {
    render(<Button text="click" color="green" />);

    const buttonText = screen.getByText(`click`);
    expect(buttonText).toBeInTheDocument();
  });

  it("should call the callback function on button click", () => {
    const callback = jest.fn();
    render(<Button text="click" color="green" onClick={callback} />);

    fireEvent.click(screen.getByText(`click`));
    expect(callback).toHaveBeenCalled();
  });
});
