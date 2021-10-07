import { render, screen } from "@testing-library/react";
import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { Footer } from "./Footer";

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

    const phone = container.querySelector("span.icon--footer-phone");
    expect(phone).toHaveClass("icon--footer-phone");
  });

  it(`should have phone number rendered to the page`, () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    );

    const phoneNumber = screen.getByText(/\+48/i);
    expect(phoneNumber).toBeInTheDocument();
  });

  it(`should have email icon`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    );

    const email = container.querySelector("span.icon--footer-email");
    expect(email).toHaveClass("icon--footer-email");
  });

  it(`should have email adress rendered to the page`, () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    );

    const emailAddress = screen.getByText("bropaint@wp.pl");
    expect(emailAddress).toBeInTheDocument();
  });

  it(`should have facebook icon`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    );

    const facebook = container.querySelector("span.icon--fb");
    expect(facebook).toBeInTheDocument();
  });

  it(`should have instagram icon`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    );

    const instagram = container.querySelector("span.icon--ig");
    expect(instagram).toBeInTheDocument();
  });

  it(`should have twitter icon`, () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    );

    const twitter = container.querySelector("span.icon--tt");
    expect(twitter).toBeInTheDocument();
  });

  it(`should have a link to privacy policy page`, () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    );

    const privacy = screen.getByText("Polityka prywatności");
    expect(privacy).toBeInTheDocument();
  });

  it(`should have a link to copyright page`, () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    );

    const copyright = screen.getByText("BRO PAINT © 2021");
    expect(copyright).toBeInTheDocument();
  });
});
