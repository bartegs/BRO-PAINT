import * as React from "react";

import { NewRepairCalculator } from "./components/NewRepairCalculator";
import { NewRepairContact } from "./components/NewRepairContact";

export function NewRepair(): JSX.Element {
  return (
    <div className="new-repair container">
      <NewRepairCalculator />
      <div className="new-repair__line" />
      <NewRepairContact />
    </div>
  );
}
