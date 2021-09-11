import * as React from "react";

import { Navbar } from "../../../../../common/react/components";
import { NavPanel } from "../../components/NavPanel";
import { Board } from "./components";

export function RepairManagementPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="content">
        <NavPanel />
        <Board />
      </div>
    </>
  );
}
