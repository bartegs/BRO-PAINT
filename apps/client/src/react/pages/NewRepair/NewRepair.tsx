import * as React from "react";

import { NewRepairCalculator } from "./components/NewRepairCalculator";
import { NewRepairContact } from "./components/NewRepairContact";

export function NewRepair(): JSX.Element {
  return (
    <div className="container new-repair ">
      <NewRepairCalculator />
      <div className="new-repair__line" />
      <NewRepairContact />
    </div>
  );
}
