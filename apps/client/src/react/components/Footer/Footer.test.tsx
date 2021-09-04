import { render, screen } from "@testing-library/react";
import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { Footer } from ".";

describe("Footer", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it(`should have class "footer--home-page" (when on homepage) which is responsible for light variant`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    );
    expect(container.firstChild).toHaveClass("footer--home-page");
  });

  it(`shouldn't have class "footer--home-page" (when on every other page) and therefore be dark variant`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/nowa-naprawa"]}>
        <Footer />
      </MemoryRouter>
    );
    expect(container.firstChild).not.toHaveClass("footer--home-page");
  });

  it(`should have phone icon`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    );
    const phone = container.querySelectorAll("span")[0];
    expect(phone).toHaveClass("icon--footer-phone");
  });

  it(`should have facebook icon`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    );
    const facebook = container.querySelectorAll("span")[2];
    expect(facebook).toHaveClass("icon--fb");
  });

  it(`should have a link to privacy policy page`, () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    );
    const privacy = screen.getByText("Polityka prywatności");
    expect(privacy).toBeTruthy();
  });
});
