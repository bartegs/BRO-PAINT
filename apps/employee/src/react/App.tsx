import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { BoardPage } from "./pages";

export default function App(): JSX.Element {
  return (
    <Router>
      <main className="content">
        <BoardPage />
      </main>
    </Router>
  );
}
