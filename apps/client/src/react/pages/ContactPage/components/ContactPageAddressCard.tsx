import * as React from "react";

import { Icon } from "../../../components/Icon";

export function ContactPageAddressCard(): JSX.Element {
  return (
    <div className="contact-page__address-card">
      <Icon icon="location" size="md" color="green" additionalClasses="mb-3" />
      <p className="mb-2">BRO PAINT siedziba w Gdańsku</p>
      <p className="mb-2">ul. Detailingowa 21</p>
      <p>21-2137 Gdańsk</p>
    </div>
  );
}
