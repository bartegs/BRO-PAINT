import { screen, render } from "@testing-library/react";
import * as React from "react";
import { CardEmail } from "./CardEmail";

describe("CardEmail", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(<CardEmail />);

    const cardEmail = container.querySelector("div.contact-page__card--email");
    expect(cardEmail).toBeInTheDocument();
  });

  it(`should render an email icon`, () => {
    const { container } = render(<CardEmail />);

    const icon = container.querySelector("span.icon--email");
    expect(icon).toBeInTheDocument();
  });

  it(`should render an input field for name`, () => {
    render(<CardEmail />);

    const name = screen.getByPlaceholderText("Podaj imię*");
    expect(name).toBeInTheDocument();
  });

  it(`should render an input field for email`, () => {
    render(<CardEmail />);

    const email = screen.getByPlaceholderText("Podaj email*");
    expect(email).toBeInTheDocument();
  });

  it(`should render a textarea field for message`, () => {
    render(<CardEmail />);

    const message = screen.getByLabelText("Jak możemy Ci pomóc?*");
    expect(message).toBeInTheDocument();
  });

  it(`should render a button with a text "Wyślij"`, () => {
    render(<CardEmail />);

    const button = screen.getByText("Wyślij");
    expect(button).toBeInTheDocument();
  });
});
