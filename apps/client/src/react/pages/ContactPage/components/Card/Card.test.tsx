import { screen, render } from "@testing-library/react";
import * as React from "react";
import { Card } from "./Card";

describe("Card", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(
      <Card category="address" icon="location" color="green">
        <p className="mb-2">BRO PAINT siedziba w Gdańsku</p>
        <p className="mb-2">ul. Detailingowa 21</p>
        <p>21-2137 Gdańsk</p>
      </Card>
    );

    const card = container.querySelector("div.contact-page__card");
    expect(card).toBeInTheDocument();
  });

  it(`should render a card of a given category (address)`, () => {
    const { container } = render(
      <Card category="address" icon="location" color="green">
        <p className="mb-2">BRO PAINT siedziba w Gdańsku</p>
        <p className="mb-2">ul. Detailingowa 21</p>
        <p>21-2137 Gdańsk</p>
      </Card>
    );

    const address = container.querySelector("div.contact-page__card--address");
    expect(address).toBeInTheDocument();
  });

  it(`should render an icon`, () => {
    const { container } = render(
      <Card category="address" icon="location" color="green">
        <p className="mb-2">BRO PAINT siedziba w Gdańsku</p>
        <p className="mb-2">ul. Detailingowa 21</p>
        <p>21-2137 Gdańsk</p>
      </Card>
    );

    const icon = container.querySelector("span.icon--location");
    expect(icon).toBeInTheDocument();
  });

  it(`should properly render children elements`, () => {
    render(
      <Card category="address" icon="location" color="green">
        <p className="mb-2">BRO PAINT siedziba w Gdańsku</p>
        <p className="mb-2">ul. Detailingowa 21</p>
        <p>21-2137 Gdańsk</p>
      </Card>
    );

    const hq = screen.getByText("BRO PAINT siedziba w Gdańsku");
    expect(hq).toBeInTheDocument();

    const street = screen.getByText("ul. Detailingowa 21");
    expect(street).toBeInTheDocument();

    const postalCode = screen.getByText("21-2137 Gdańsk");
    expect(postalCode).toBeInTheDocument();
  });
});
