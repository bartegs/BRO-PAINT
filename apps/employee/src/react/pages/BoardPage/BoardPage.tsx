import * as React from "react";

import { NavPanel } from "./components";

export function BoardPage(): JSX.Element {
  return (
    <div className="board-page">
      <NavPanel />
      <section className="board-page__board board">tablica</section>
    </div>
  );
}
