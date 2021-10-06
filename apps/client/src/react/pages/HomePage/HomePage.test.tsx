import { screen, render } from "@testing-library/react";
import * as React from "react";
import { HomePage } from "./HomePage";
import { formTitle } from "../../components/forms/CheckStatusForm";

// walkaround for a useEffect console warning
// eslint-disable-next-line no-console
console.error = jest.fn();

describe("HomePage", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(
      <div id="root">
        <HomePage />
      </div>
    );

    const homePage = container.querySelector("div.home-page");
    expect(homePage).toBeInTheDocument();
  });

  it(`should render a form for checking order status`, () => {
    render(
      <div id="root">
        <HomePage />
      </div>
    );

    const form = screen.getByText(formTitle);
    expect(form).toBeInTheDocument();
  });

  it(`should have a "root-background" class which provides baner image`, () => {
    const { container } = render(
      <div id="root">
        <HomePage />
      </div>
    );

    const baner = container.querySelector("div.root-background");
    expect(baner).toBeInTheDocument();
  });
});
