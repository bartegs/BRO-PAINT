import * as React from "react";

import { ContactPageAddressCard } from "./components/ContactPageAddressCard";
import { ContactPagePhoneCard } from "./components/ContactPagePhoneCard";
import { ContactPageEmailCard } from "./components/ContactPageEmailCard";
import { ContactPageMap } from "./components/ContactPageMap";

export function ContactPage(): JSX.Element {
  return (
    <div className="contact-page container">
      <div className="contact-page__cards-container">
        <ContactPageAddressCard />
        <ContactPagePhoneCard />
        <ContactPageEmailCard />
      </div>
      <ContactPageMap />
    </div>
  );
}
