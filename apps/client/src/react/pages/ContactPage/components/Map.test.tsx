import { render } from "@testing-library/react";
import * as React from "react";
import { Map } from ".";

describe("Map", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(<Map />);

    const map = container.querySelector("section.contact-page__map");
    expect(map).toBeInTheDocument();
  });

  it(`should contain an iframe tag`, () => {
    const { container } = render(<Map />);

    const map = container.querySelector("iframe");
    expect(map).toBeInTheDocument();
  });

  it(`should contain an iframe tag with a correct link to google maps`, () => {
    const { container } = render(<Map />);

    const map = container.querySelector("iframe").src;
    expect(
      map ===
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.1831644536046!2d18.582097551611657!3d54.38907968011358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd73bd51f21f8b%3A0x50c8a05c9778d809!2sWy%C5%BCsza%20Szko%C5%82a%20Bankowa%20w%20Gda%C5%84sku!5e0!3m2!1spl!2spl!4v1627203629444!5m2!1spl!2spl"
    ).toBeTruthy();
  });
});
