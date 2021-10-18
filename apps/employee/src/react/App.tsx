import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import createRoutes from "../routes";
import EmployeeContextProvider from "./contexts/EmployeeContext";

export default function App(): JSX.Element {
  return (
    <Router basename="/pracownik">
      <EmployeeContextProvider>
        <main>
          <Switch>{createRoutes}</Switch>
        </main>
      </EmployeeContextProvider>
    </Router>
  );
}
