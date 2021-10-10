import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import createRoutes from "../routes";
import AppContextProvider from "./contexts/AppContext";

export default function App(): JSX.Element {
  return (
    <Router basename="/pracownik">
      <AppContextProvider>
        <main>
          <Switch>{createRoutes}</Switch>
        </main>
      </AppContextProvider>
    </Router>
  );
}
