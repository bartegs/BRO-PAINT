import * as React from "react";

import { Icon } from "../../../components/Icon";

export function ContactPagePhoneCard(): JSX.Element {
  return (
    <div className="contact-page__phone-card">
      <Icon icon="phone" size="md" color="blue" additionalClasses="mb-3" />
      <p className="mb-2">
        <span className="mr-2">Obsługa klienta</span>
        <span>+48 000 222 444</span>
      </p>
      <p>
        <span className="mr-2">Współpraca</span>
        <span>+48 000 333 666</span>
      </p>
    </div>
  );
}
