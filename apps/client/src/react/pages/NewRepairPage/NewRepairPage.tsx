import * as React from "react";

import { Calculator } from "./components/Calculator";
import { Contact } from "./components/Contact";

export function NewRepairPage(): JSX.Element {
  return (
    <div className="container new-repair-page">
      <Calculator />
      <div role="presentation" className="new-repair-page__line" />
      <Contact />
    </div>
  );
}
