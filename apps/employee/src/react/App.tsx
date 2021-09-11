import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import createRoutes from "../routes";

export default function App(): JSX.Element {
  return (
    <Router basename="/pracownik">
      <main>
        <Switch>{createRoutes}</Switch>
      </main>
    </Router>
  );
}
