import * as React from "react";

import { Card, CardEmail, Map } from "./components";

export function ContactPage(): JSX.Element {
  return (
    <div className="contact-page container">
      <section className="contact-page__cards-container">
        <Card category="address" icon="location" color="green">
          <p className="mb-2">BRO PAINT siedziba w Gdańsku</p>
          <p className="mb-2">ul. Detailingowa 21</p>
          <p>80-266 Gdańsk</p>
        </Card>
        <Card category="phone" icon="phone" color="blue">
          <p className="mb-2">
            <span className="mr-2">Obsługa klienta</span>
            <span>+48 222 444 888</span>
          </p>
          <p>
            <span className="mr-2">Współpraca</span>
            <span>+48 222 444 999</span>
          </p>
        </Card>
        <CardEmail />
      </section>
      <Map />
    </div>
  );
}
