import * as React from "react";

import { Board, NavPanel } from "./components";

// manageTaksPage
export function BoardPage(): JSX.Element {
  return (
    <div className="board-page">
      <NavPanel />
      <Board />
    </div>
  );
}
